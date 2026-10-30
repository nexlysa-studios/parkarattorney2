import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import heroImage from "@/assets/hero-architecture.jpg";
import firmImage from "@/assets/firm-interior.jpg";
import { Reveal, heroContainerVariants, heroLineVariants, easing } from "@/components/Reveal";
import { ApproachSection } from "@/components/ApproachSection";
import { CtaBanner } from "@/components/CtaBanner";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { articles, formatDate } from "@/data/insights";
import { teamHasProfiles } from "@/data/team";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} | Attorneys in South Africa` },
      {
        name: "description",
        content:
          "Parkar Attorneys Inc. — professional legal guidance grounded in careful thinking and clear communication. Discuss your matter with our team.",
      },
      { property: "og:title", content: `${site.name} | Attorneys in South Africa` },
      {
        property: "og:description",
        content: "Clarity in Law. Confidence in Every Step. A South African legal practice.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const heroLines = ["Clarity in Law.", "Confidence in", "Every Step."];

function Index() {
  const reduced = useReducedMotion();
  const featured = articles[0]!;
  const rest = articles.slice(1);

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-evergreen">
        <div className="absolute inset-0" aria-hidden="true">
          <motion.img
            src={heroImage}
            alt=""
            width={1920}
            height={1080}
            fetchPriority="high"
            className="h-full w-full object-cover"
            {...(!reduced
              ? {
                  initial: { scale: 1.08 },
                  animate: { scale: 1 },
                  transition: { duration: 2.4, ease: easing },
                }
              : {})}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-evergreen via-evergreen/70 to-evergreen/30" />
        </div>

        <motion.div
          className="relative z-10 w-full pb-20 pt-40 lg:pb-28"
          variants={heroContainerVariants}
          {...(reduced ? {} : { initial: "hidden", animate: "show" })}
        >
          <div className="container-editorial">
            <motion.p variants={heroLineVariants} className="eyebrow text-champagne">
              {site.eyebrowName}
            </motion.p>
            <h1 className="heading-serif mt-6 text-5xl text-ivory sm:text-6xl lg:text-7xl lg:text-8xl">
              {heroLines.map((line) => (
                <motion.span key={line} variants={heroLineVariants} className="block">
                  {line}
                </motion.span>
              ))}
            </h1>
            <motion.p
              variants={heroLineVariants}
              className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 lg:text-lg"
            >
              {site.heroSupport}
            </motion.p>
            <motion.div variants={heroLineVariants} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-ivory px-7 py-4 text-sm font-semibold text-evergreen transition-colors duration-300 hover:bg-champagne"
              >
                Discuss Your Matter
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center border border-ivory/40 px-7 py-4 text-sm font-semibold text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
          <span className="eyebrow text-[0.6rem] text-ivory/60">Scroll</span>
          <span className="relative block h-14 w-px overflow-hidden bg-ivory/25">
            {!reduced && (
              <motion.span
                className="absolute left-0 top-0 h-5 w-px bg-champagne"
                animate={{ y: [-20, 56] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              />
            )}
          </span>
        </div>
      </section>

      {/* ——— Introductory statement ——— */}
      <section className="bg-ivory">
        <div className="container-editorial grid gap-12 py-20 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <Reveal>
              <span aria-hidden="true" className="accent-line block w-16" />
              <h2 className="heading-serif mt-8 text-3xl text-foreground sm:text-4xl lg:text-5xl">
                {site.introStatement}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {site.introSupport}
              </p>
              {/* Restrained scales-of-justice ornament referencing the firm's mark */}
              <ScalesOrnament className="mt-10 hidden w-32 text-forest/30 lg:block" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Legal services ——— */}
      <section className="bg-paper border-t border-border">
        <div className="container-editorial py-20 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <p className="eyebrow text-forest">Legal Services</p>
                  <h2 className="heading-serif mt-4 text-4xl text-foreground lg:text-5xl">
                    Areas of practice
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    Explore the draft practice areas below. Each opens a detailed
                    overview. Categories remain subject to the firm's confirmation.
                  </p>
                  <Link
                    to="/services"
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest"
                  >
                    All legal services
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              </div>
            </div>
            <ul className="lg:col-span-8">
              {services.map((s, i) => (
                <li key={s.slug} className="border-t border-border">
                  <Reveal delay={i * 0.05} y={20}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group flex items-baseline gap-6 py-7 transition-colors lg:gap-10 lg:py-9"
                    >
                      <span className="font-serif text-lg text-champagne lg:text-xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="block font-serif text-2xl text-foreground transition-colors duration-300 group-hover:text-forest lg:text-4xl">
                          {s.name}
                        </span>
                        <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted-foreground">
                          {s.short}
                        </span>
                      </span>
                      <span className="hidden items-center gap-2 text-[0.75rem] font-semibold tracking-wide text-forest sm:inline-flex">
                        Learn more
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
        </div>
      </section>

      {/* ——— The firm's approach ——— */}
      <section className="bg-ivory border-t border-border">
        <div className="container-editorial py-20 lg:py-32">
          <Reveal>
            <p className="eyebrow text-forest">Our Approach</p>
            <h2 className="heading-serif mt-4 max-w-2xl text-4xl text-foreground lg:text-5xl">
              A considered process for every matter.
            </h2>
          </Reveal>
          <div className="mt-14 lg:mt-20">
            <ApproachSection />
          </div>
        </div>
      </section>

      {/* ——— Firm introduction ——— */}
      <section className="bg-paper border-t border-border">
        <div className="container-editorial grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <img
                src={firmImage}
                alt="The firm's boardroom — dark oak panelling, leather-bound volumes and a long oak table"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 hidden border border-champagne lg:block h-32 w-32"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="eyebrow text-forest">The Firm</p>
              <h2 className="heading-serif mt-4 text-4xl text-foreground lg:text-5xl">
                {site.firmIntroHeading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {site.firmIntroBody}
              </p>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest"
              >
                About the firm
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— The people behind the practice ——— */}
      <section className="bg-ivory border-t border-border">
        <div className="container-editorial py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-forest">Our Team</p>
                <h2 className="heading-serif mt-4 text-4xl text-foreground lg:text-5xl">
                  {teamHasProfiles
                    ? "The people behind the practice."
                    : "Meet the team behind Parkar Attorneys Inc."}
                </h2>
                {!teamHasProfiles && (
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    Team profiles will appear here once the firm's attorneys and
                    staff have been confirmed and their details approved for
                    publication.
                  </p>
                )}
              </Reveal>
            </div>
            <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
              <Link
                to="/team"
                className="group block border border-border bg-paper p-8 transition-colors duration-300 hover:border-forest/40"
              >
                <span className="eyebrow text-muted-foreground">Our Team</span>
                <span className="mt-3 block font-serif text-2xl text-foreground lg:text-3xl">
                  View team profiles
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  Meet the team
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Insights ——— */}
      <section className="bg-paper border-t border-border">
        <div className="container-editorial py-20 lg:py-32">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-forest">Insights</p>
                <h2 className="heading-serif mt-4 text-4xl text-foreground lg:text-5xl">
                  Legal knowledge, plainly written.
                </h2>
              </div>
              <Link to="/insights" className="link-underline text-sm font-semibold text-forest">
                All insights
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-12">
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
                <h3 className="heading-serif mt-3 text-3xl text-foreground transition-colors duration-300 group-hover:text-forest lg:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
              </Link>
            </Reveal>
            <div className="lg:col-span-5">
              {rest.map((a, i) => (
                <Reveal key={a.slug} delay={0.1 + i * 0.08}>
                  <Link
                    to="/insights/$slug"
                    params={{ slug: a.slug }}
                    className="group block border-t border-border py-6 first:border-t-0 lg:first:border-t lg:first:pt-7"
                  >
                    <p className="flex flex-wrap items-center gap-3 text-xs tracking-wide text-muted-foreground">
                      <span className="eyebrow text-forest">{a.category}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={a.date}>{formatDate(a.date)}</time>
                    </p>
                    <h3 className="heading-serif mt-2 text-2xl text-foreground transition-colors duration-300 group-hover:text-forest">
                      {a.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {a.excerpt}
                    </p>
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

function ScalesOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className} aria-hidden="true">
      <path d="M60 8v84M60 8l-44 12M60 8l44 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 20l-12 22h24L16 20zM104 20l-12 22h24l-12-22z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 42c0 6.6 5.4 12 12 12s12-5.4 12-12M92 42c0 6.6 5.4 12 12 12s12-5.4 12-12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M36 92h48M46 84h28" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
