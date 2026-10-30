import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { articles, formatDate } from "@/data/insights";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: `Insights | ${site.name}` },
      {
        name: "description",
        content:
          "Legal knowledge, plainly written — draft articles from Parkar Attorneys Inc. on agreements, property transactions and preparing for a consultation.",
      },
      { property: "og:title", content: `Insights | ${site.name}` },
      { property: "og:description", content: "Legal knowledge, plainly written." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  const featured = articles[0]!;
  const rest = articles.slice(1);
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Legal knowledge, plainly written."
        intro="Notes on the legal questions our clients encounter most. Articles marked as drafts are sample content pending review and approval by the firm."
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
                Insights
              </li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Link to="/insights/$slug" params={{ slug: featured.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-6 flex flex-wrap items-center gap-3 text-xs tracking-wide text-muted-foreground">
                  <span className="eyebrow text-forest">{featured.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readingTime}</span>
                </p>
                <h2 className="heading-serif mt-3 text-3xl text-foreground transition-colors duration-300 group-hover:text-forest lg:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                {featured.draft && (
                  <p className="mt-3 inline-block border border-border px-2 py-1 text-[0.65rem] font-semibold tracking-widest text-muted-foreground">
                    DRAFT — PENDING FIRM REVIEW
                  </p>
                )}
              </Link>
            </Reveal>
            <div className="lg:col-span-5">
              {rest.map((a, i) => (
                <Reveal key={a.slug} delay={0.08 + i * 0.08}>
                  <Link
                    to="/insights/$slug"
                    params={{ slug: a.slug }}
                    className="group block border-t border-border py-7 first:border-t-0 lg:first:border-t"
                  >
                    <p className="flex flex-wrap items-center gap-3 text-xs tracking-wide text-muted-foreground">
                      <span className="eyebrow text-forest">{a.category}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={a.date}>{formatDate(a.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{a.readingTime}</span>
                    </p>
                    <h2 className="heading-serif mt-2 text-2xl text-foreground transition-colors duration-300 group-hover:text-forest">
                      {a.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                    {a.draft && (
                      <p className="mt-3 inline-block border border-border px-2 py-1 text-[0.65rem] font-semibold tracking-widest text-muted-foreground">
                        DRAFT — PENDING FIRM REVIEW
                      </p>
                    )}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
