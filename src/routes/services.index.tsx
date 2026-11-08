import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: `Legal Services | ${site.name}` },
      {
        name: "description",
        content:
          "Explore the legal services offered by Parkar Attorneys Inc., including family, commercial, litigation, estate, criminal, immigration and labour law.",
      },
      { property: "og:title", content: `Legal Services | ${site.name}` },
      {
        property: "og:description",
        content: "Explore the firm's practice areas and request a consultation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Services"
        title="Clear counsel across the areas that matter."
        intro="Explore the firm's legal services below. Each page outlines the matters the firm assists with."
      />

      <section className="bg-ivory">
        <div className="container-editorial py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="link-underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                Legal Services
              </li>
            </ol>
          </nav>

          <ul>
            {services.map((s, i) => (
              <li key={s.slug} className="border-t border-border">
                <Reveal delay={i * 0.05} y={20}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group grid gap-3 py-8 transition-colors lg:grid-cols-12 lg:items-baseline lg:gap-10 lg:py-10"
                  >
                    <span className="font-serif text-lg text-champagne lg:col-span-1 lg:text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="lg:col-span-5">
                      <span className="block font-serif text-2xl text-foreground transition-colors duration-300 group-hover:text-forest lg:text-3xl">
                        {s.name}
                      </span>
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground lg:col-span-5">
                      {s.short}
                    </span>
                    <span className="hidden items-center gap-2 text-[0.75rem] font-semibold tracking-wide text-forest lg:col-span-1 lg:inline-flex">
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
            <li className="border-t border-border" aria-hidden="true" />
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
