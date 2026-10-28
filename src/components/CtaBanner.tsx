import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

/** Closing call-to-action band, deep evergreen. */
export function CtaBanner({
  heading = "Let's start with a conversation.",
  copy = "Get in touch with our team to discuss your enquiry and the appropriate next steps.",
}: {
  heading?: string;
  copy?: string;
}) {
  return (
    <section className="bg-evergreen text-ivory">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-champagne/90">Contact</p>
              <h2 className="heading-serif mt-4 text-4xl sm:text-5xl lg:text-6xl">
                {heading}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">
                {copy}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-ivory px-7 py-4 text-sm font-semibold text-evergreen transition-colors duration-300 hover:bg-champagne hover:text-evergreen"
              >
                Contact Parkar Attorneys
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-ivory/40 px-7 py-4 text-sm font-semibold text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
              >
                Request a Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
