import { createFileRoute, Link } from "@tanstack/react-router";
import { useId, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { submitEnquiry } from "@/lib/enquiries.functions";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { enquiryCategories, site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${site.name}` },
      {
        name: "description",
        content:
          "Contact Parkar Attorneys Inc. to discuss your enquiry. Submit an initial enquiry and the firm will respond about the appropriate next steps.",
      },
      { property: "og:title", content: `Contact | ${site.name}` },
      {
        property: "og:description",
        content: "Start the conversation — submit an initial enquiry to the firm.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact,
});

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z
    .string()
    .trim()
    .max(40, "Phone number is too long.")
    .regex(/^[+\d\s()\-]*$/, "Please enter a valid phone number."),
  enquiryType: z.string().min(2, "Please choose a category."),
  preferredContact: z.enum(["email", "phone"]),
  message: z
    .string()
    .trim()
    .min(10, "Please describe your enquiry in a little more detail.")
    .max(2000, "Please keep your message under 2000 characters."),
  consent: z.literal(true, { message: "Please acknowledge the privacy notice." }),
});

type FormValues = z.infer<typeof formSchema>;

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

function Contact() {
  const submit = useServerFn(submitEnquiry);
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const startRef = useRef<number>(Date.now());
  const fieldIds = {
    fullName: useId(),
    email: useId(),
    phone: useId(),
    enquiryType: useId(),
    message: useId(),
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const values = {
      fullName: String(fd.get("fullName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      enquiryType: String(fd.get("enquiryType") ?? ""),
      preferredContact: fd.get("preferredContact") === "phone" ? "phone" : "email",
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    };

    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues | undefined;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    setStatus({ state: "submitting" });
    try {
      const res = await submit({
        data: {
          ...parsed.data,
          company: String(fd.get("company") ?? ""),
          elapsedMs: Date.now() - startRef.current,
        },
      });
      if (res.ok) {
        setStatus({ state: "success" });
        form.reset();
        startRef.current = Date.now();
        window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
      } else {
        setStatus({
          state: "error",
          message: "Your enquiry could not be submitted at the moment. Please try again, or contact the firm directly once its contact details are published.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Something went wrong while sending your enquiry. Please try again.",
      });
    }
  }

  const inputCls =
    "w-full border border-input bg-paper px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest transition-colors";
  const labelCls = "block text-sm font-semibold text-foreground";
  const errCls = (key: keyof FormValues) =>
    errors[key] ? "mt-2 text-xs text-destructive" : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start with a conversation."
        intro="Submit an initial enquiry and the firm will respond to discuss your question and the appropriate next steps."
      />

      <section className="bg-ivory">
        <div className="container-editorial grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Reveal>
              {status.state === "success" ? (
                <div
                  role="status"
                  className="border border-forest/30 bg-paper p-10 text-center lg:p-16"
                >
                  <span aria-hidden="true" className="mx-auto block h-1 w-12 bg-champagne" />
                  <h2 className="heading-serif mt-6 text-3xl text-foreground">
                    Thank you — your enquiry has been received.
                  </h2>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    The firm will review your enquiry and respond as soon as
                    possible. Please note that submitting this form does not
                    create an attorney-client relationship.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus({ state: "idle" })}
                    className="mt-8 text-sm font-semibold text-forest underline underline-offset-4 hover:text-evergreen"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor={fieldIds.fullName} className={labelCls}>
                        Full name <span aria-hidden="true" className="text-forest">*</span>
                      </label>
                      <input
                        id={fieldIds.fullName}
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? `err-${fieldIds.fullName}` : undefined}
                        className={`${inputCls} mt-2`}
                      />
                      {errors.fullName && (
                        <p id={`err-${fieldIds.fullName}`} role="alert" className={errCls("fullName")}>
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={fieldIds.email} className={labelCls}>
                        Email address <span aria-hidden="true" className="text-forest">*</span>
                      </label>
                      <input
                        id={fieldIds.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? `err-${fieldIds.email}` : undefined}
                        className={`${inputCls} mt-2`}
                      />
                      {errors.email && (
                        <p id={`err-${fieldIds.email}`} role="alert" className={errCls("email")}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={fieldIds.phone} className={labelCls}>
                        Phone number{" "}
                        <span className="font-normal text-muted-foreground">(optional)</span>
                      </label>
                      <input
                        id={fieldIds.phone}
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? `err-${fieldIds.phone}` : undefined}
                        className={`${inputCls} mt-2`}
                      />
                      {errors.phone && (
                        <p id={`err-${fieldIds.phone}`} role="alert" className={errCls("phone")}>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={fieldIds.enquiryType} className={labelCls}>
                        Type of enquiry <span aria-hidden="true" className="text-forest">*</span>
                      </label>
                      <select
                        id={fieldIds.enquiryType}
                        name="enquiryType"
                        required
                        defaultValue=""
                        aria-invalid={Boolean(errors.enquiryType)}
                        className={`${inputCls} mt-2`}
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {enquiryCategories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {errors.enquiryType && (
                        <p role="alert" className={errCls("enquiryType")}>
                          {errors.enquiryType}
                        </p>
                      )}
                    </div>
                  </div>

                  <fieldset className="mt-8">
                    <legend className={labelCls}>Preferred contact method</legend>
                    <div className="mt-3 flex gap-8">
                      <label className="flex items-center gap-2 text-sm text-foreground/85">
                        <input type="radio" name="preferredContact" value="email" defaultChecked className="accent-[color:var(--forest)]" />
                        Email
                      </label>
                      <label className="flex items-center gap-2 text-sm text-foreground/85">
                        <input type="radio" name="preferredContact" value="phone" className="accent-[color:var(--forest)]" />
                        Phone
                      </label>
                    </div>
                  </fieldset>

                  <div className="mt-8">
                    <label htmlFor={fieldIds.message} className={labelCls}>
                      Brief message <span aria-hidden="true" className="text-forest">*</span>
                    </label>
                    <textarea
                      id={fieldIds.message}
                      name="message"
                      rows={6}
                      required
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? `err-${fieldIds.message}` : undefined}
                      className={`${inputCls} mt-2 resize-y`}
                    />
                    {errors.message && (
                      <p id={`err-${fieldIds.message}`} role="alert" className={errCls("message")}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot — hidden from users, catches naive bots */}
                  <div aria-hidden="true" className="hidden">
                    <label htmlFor="hp-company">Company</label>
                    <input id="hp-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="mt-8">
                    <label className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                      <input
                        type="checkbox"
                        name="consent"
                        className="mt-1 accent-[color:var(--forest)]"
                        aria-invalid={Boolean(errors.consent)}
                      />
                      <span>
                        I have read the{" "}
                        <Link to="/privacy-policy" className="link-underline font-semibold text-forest">
                          Privacy Policy
                        </Link>{" "}
                        and consent to the firm processing these details to respond
                        to my enquiry. <span aria-hidden="true" className="text-forest">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p role="alert" className="mt-2 text-xs text-destructive">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {status.state === "error" && (
                    <p role="alert" className="mt-6 border-l-2 border-destructive bg-destructive/5 p-4 text-sm text-destructive">
                      {status.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status.state === "submitting"}
                    className="group mt-8 inline-flex items-center gap-2 bg-forest px-8 py-4 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-evergreen disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status.state === "submitting" ? "Sending…" : "Submit enquiry"}
                    <span
                      aria-hidden="true"
                      className={`block h-1 w-1 bg-champagne ${status.state === "submitting" ? "animate-pulse" : ""}`}
                    />
                  </button>
                </form>
              )}
            </Reveal>
          </div>

          {/* Side panel */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <div className="space-y-10 lg:sticky lg:top-32">
                <div className="bg-evergreen p-8 text-ivory">
                  <p className="eyebrow text-champagne/90">Direct contact</p>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs tracking-wide text-ivory/50">Telephone</dt>
                      <dd className={site.contact.phoneDisplay ?? site.contact.phone ? "" : "italic text-ivory/40"}>
                        {site.contact.phoneDisplay ?? site.contact.phone ?? "To be confirmed by the firm"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-wide text-ivory/50">Email</dt>
                      <dd className={site.contact.email ? "" : "italic text-ivory/40"}>
                        {site.contact.email ?? "To be confirmed by the firm"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-wide text-ivory/50">Office</dt>
                      <dd className={site.contact.address ? "" : "italic text-ivory/40"}>
                        {site.contact.address ?? "To be confirmed by the firm"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-wide text-ivory/50">Office hours</dt>
                      <dd className={site.contact.hours ? "" : "italic text-ivory/40"}>
                        {site.contact.hours ?? "To be confirmed by the firm"}
                      </dd>
                    </div>
                  </dl>
                  {/* WhatsApp / click-to-call/email links activate automatically
                      once verified contact details are supplied. */}
                </div>
                <div className="border border-border bg-paper p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Please note:</span>{" "}
                    do not send confidential documents, sensitive personal
                    information or detailed case materials through this form. It
                    is for initial, general enquiries only — detailed material
                    belongs in a consultation, where it can be handled properly.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Submitting this form does not create an attorney-client
                    relationship and does not guarantee confidentiality beyond
                    what applicable law and the firm's policies provide.
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
