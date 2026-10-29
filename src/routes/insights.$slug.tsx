import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { articles, formatDate, getArticle } from "@/data/insights";
import { site } from "@/data/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    if (!getArticle(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) return { meta: [{ title: `Insights | ${site.name}` }] };
    return {
      meta: [
        { title: `${article.title} | ${site.name}` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: `${article.title} | ${site.name}` },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getArticle(slug)!;
  const others = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="bg-evergreen pt-28 text-ivory lg:pt-40">
        <div className="container-editorial pb-12 lg:pb-16">
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
                  <Link to="/insights" className="link-underline hover:text-ivory">
                    Insights
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3" />
                </li>
                <li aria-current="page" className="text-ivory/90">
                  {article.category}
                </li>
              </ol>
            </nav>
            <h1 className="heading-serif mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 flex flex-wrap items-center gap-3 text-xs tracking-wide text-ivory/60">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>{article.category}</span>
            </p>
            {article.draft && (
              <p className="mt-4 inline-block border border-ivory/30 px-2 py-1 text-[0.65rem] font-semibold tracking-widest text-ivory/70">
                DRAFT — PENDING FIRM REVIEW
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-editorial">
          <Reveal>
            <img
              src={article.image}
              alt={article.imageAlt}
              width={1024}
              height={640}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </Reveal>
          <article className="mx-auto max-w-2xl py-14 lg:py-20">
            {article.body.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2 key={i} className="heading-serif mt-10 text-3xl text-foreground first:mt-0">
                    {block.text}
                  </h2>
                );
              if (block.type === "quote")
                return (
                  <blockquote
                    key={i}
                    className="my-10 border-l-2 border-champagne pl-6 font-serif text-2xl italic leading-snug text-forest"
                  >
                    {block.text}
                  </blockquote>
                );
              if (block.type === "list")
                return (
                  <ul key={i} className="my-6 space-y-3">
                    {block.items.map((item) => (
                      <li key={item.slice(0, 24)} className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
                        <span aria-hidden="true" className="mt-2.5 block h-1 w-1 shrink-0 bg-champagne" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i} className="mt-6 text-base leading-relaxed text-foreground/85">
                  {block.text}
                </p>
              );
            })}
          </article>

          <div className="mx-auto max-w-2xl border-t border-border pb-16 lg:pb-20">
            <h2 className="eyebrow mt-10 text-forest">Continue reading</h2>
            <ul className="mt-5 space-y-5">
              {others.map((a) => (
                <li key={a.slug}>
                  <Link
                    to="/insights/$slug"
                    params={{ slug: a.slug }}
                    className="group flex items-baseline justify-between gap-4"
                  >
                    <span className="font-serif text-xl text-foreground transition-colors duration-300 group-hover:text-forest">
                      {a.title}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">{a.readingTime}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
