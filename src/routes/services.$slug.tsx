import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { getService, relatedServices } from "@/data/services";
import { site } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    if (!service) return { meta: [{ title: `Service | ${site.name}` }] };
    return {
      meta: [
        { title: `${service.name} | ${site.name}` },
        { name: "description", content: service.short },
        { property: "og:title", content: `${service.name} | ${site.name}` },
        { property: "og:description", content: service.short },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const related = relatedServices(slug);

  return (
    <>
      <section className="bg-evergreen pt-28 text-ivory lg:pt-40">
        <div className="container-editorial pb-14 lg:pb-20">
          <Reveal y={16}>
            <nav aria-label="Breadcrumb" className="text-xs text-ivory/60">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="link-underline hover:text-ivory">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3" />
                </li>
                <li>
                  <Link to="/services" className="link-underline hover:text-ivory">
                    Legal Services
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3" />
                </li>
                <li aria-current="page" className="text-ivory/90">
                  {service.name}
                </li>
              </ol>
            </nav>
            <h1 className="heading-serif mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/75">
              {service.short}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-editorial grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5">
                {service.intro.map((p) => (
                  <p key={p.slice(0, 24)} className="text-base leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="heading-serif mt-14 text-3xl text-foreground">
                Matters we assist with
              </h2>
              <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {service.matters.map((m) => (
                  <li key={m} className="flex items-start gap-3 border-t border-border pt-4 text-sm text-foreground/85">
                    <span aria-hidden="true" className="mt-2 block h-1 w-1 shrink-0 bg-champagne" />
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="heading-serif mt-14 text-3xl text-foreground">How we work</h2>
              <ol className="mt-6 space-y-6">
                {service.process.map((step, i) => (
                  <li key={step.slice(0, 24)} className="flex gap-5 border-t border-border pt-5">
                    <span className="font-serif text-xl text-champagne">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="heading-serif mt-14 text-3xl text-foreground">Common questions</h2>
              <div className="mt-6 divide-y divide-border border-y border-border">
                {service.faqs.map((f) => (
                  <details key={f.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground">
                      {f.question}
                      <ChevronRight
                        className="size-4 shrink-0 text-forest transition-transform duration-300 group-open:rotate-90"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {f.answer}
                    </p>
                  </details>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground/70">
                Answers are general information only and are subject to review by
                the firm before publication.
              </p>
            </Reveal>
          </div>

          {/* Side rail */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10 lg:sticky lg:top-32">
              <div className="border border-border bg-paper p-8">
                <p className="eyebrow text-forest">Discuss your matter</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Tell us briefly what you need and the appropriate next steps
                  can be discussed with you.
                </p>
                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-2 bg-forest px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-evergreen"
                >
                  Contact the firm
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
              <div>
                <p className="eyebrow text-forest">Related services</p>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug} className="border-t border-border pt-3">
                      <Link
                        to="/services/$slug"
                        params={{ slug: r.slug }}
                        className="group flex items-center justify-between gap-3 text-sm text-foreground/85 hover:text-forest"
                      >
                        {r.name}
                        <ArrowRight
                          className="size-4 shrink-0 text-champagne transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
