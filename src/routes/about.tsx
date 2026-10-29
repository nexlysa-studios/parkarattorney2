import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import firmImage from "@/assets/firm-interior.jpg";
import heroImage from "@/assets/hero-architecture.jpg";
import { PageHeader } from "@/components/PageHeader";
import { ApproachSection } from "@/components/ApproachSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `Our Firm | ${site.name}` },
      {
        name: "description",
        content:
          "An introduction to Parkar Attorneys Inc. — our approach to legal practice, our values and how we work with clients.",
      },
      { property: "og:title", content: `Our Firm | ${site.name}` },
      {
        property: "og:description",
        content: "A considered approach to legal practice.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Careful thinking",
    body: "Every matter begins with understanding — of the facts, the law and the person asking the question.",
  },
  {
    title: "Clear communication",
    body: "Legal advice is only useful when it is understood. We write and speak plainly, and we explain why.",
  },
  {
    title: "Diligence in the detail",
    body: "The quality of legal work lives in the detail. We prepare matters as though they will be tested — because they may be.",
  },
  {
    title: "Integrity above convenience",
    body: "We give honest advice even when it is not the convenient answer, and we decline work we cannot do properly.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Firm"
        title="A considered approach to legal practice."
        intro={site.firmIntroBody}
      />

      {/* Values */}
      <section className="bg-ivory">
        <div className="container-editorial py-20 lg:py-28">
          <Reveal>
            <p className="eyebrow text-forest">How We Work</p>
          </Reveal>
          <div className="mt-12">
            <ApproachSection />
          </div>
        </div>
      </section>

      {/* Editorial introduction */}
      <section className="bg-paper border-t border-border">
        <div className="container-editorial grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <img
              src={firmImage}
              alt="The firm's boardroom — dark oak panelling, leather-bound volumes and a long oak table"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="eyebrow text-forest">The Practice</p>
              <h2 className="heading-serif mt-4 text-3xl text-foreground lg:text-4xl">
                {site.introStatement}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Parkar Attorneys Inc. is a South African legal practice. We
                  advise individuals, families and businesses — and we do so by
                  taking the time to understand each matter properly before
                  advising on it.
                </p>
                <p>
                  Our approach is deliberately unpretentious: careful thinking,
                  clear communication and diligent preparation, applied to every
                  matter regardless of its size.
                </p>
              </div>
              {/* PLACEHOLDER: founding date, professional memberships and
                  office location are withheld until the firm confirms them. */}
              <p className="mt-8 border-l-2 border-champagne pl-4 text-sm italic leading-relaxed text-muted-foreground">
                Founding history, professional memberships and office details
                will appear here once confirmed by the firm.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-ivory border-t border-border">
        <div className="container-editorial py-20 lg:py-28">
          <Reveal>
            <p className="eyebrow text-forest">Values</p>
            <h2 className="heading-serif mt-4 max-w-2xl text-3xl text-foreground lg:text-4xl">
              What clients can expect from us.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="border-t border-border pt-6">
                  <h3 className="font-serif text-2xl text-foreground">{v.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural image band */}
      <section className="bg-ivory border-t border-border">
        <div className="container-editorial">
          <Reveal>
            <img
              src={heroImage}
              alt="Contemporary institutional architecture — stone piers and bronze-framed glass in warm light"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[21/9] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-2">
        <div className="container-editorial pb-16 lg:pb-20">
          <Reveal>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest"
            >
              Discuss your matter with us
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Speak with the firm."
        copy="Whether your question is large or small, it starts the same way — with a conversation."
      />
    </>
  );
}
