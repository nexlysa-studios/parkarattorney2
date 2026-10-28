import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

/**
 * Public enquiry submission.
 *
 * - Validates and length-caps every field server-side.
 * - Discards honeypot (bot) submissions silently, reporting success so
 *   bots gain no signal — genuine enquiries are never silently discarded.
 * - Stores the enquiry in the database; a failed insert returns a typed
 *   failure the UI turns into an actionable error message.
 */

const enquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[+\d\s()\-]*$/, "Invalid phone number")
    .optional()
    .or(() => ""),
  enquiryType: z.string().trim().min(2).max(120),
  preferredContact: z.enum(["email", "phone"]),
  message: z.string().trim().min(10).max(2000),
  consent: z.boolean().refine((v) => v === true),
  // Honeypot + elapsed-time spam checks
  company: z.string().max(0).optional().or(() => ""),
  elapsedMs: z.number().int().min(0),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    // Bot signals: honeypot filled, or the form was completed implausibly
    // fast. Return success without storing — a real visitor can never trip
    // either, and no enquiry is lost (bots produce no genuine ones).
    if ((data.company ?? "").length > 0 || data.elapsedMs < 3000) {
      return { ok: true as const, discarded: true };
    }

    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      // Opaque sb_ keys are not JWTs: send apikey, strip the bearer.
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("enquiries").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      enquiry_type: data.enquiryType,
      preferred_contact: data.preferredContact,
      message: data.message,
      consent_acknowledged: data.consent,
    });

    if (error) {
      console.error("Enquiry submission failed:", error.message);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
