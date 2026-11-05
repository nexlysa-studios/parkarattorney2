import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, UserRound } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { team, teamHasProfiles } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: `Our Team | ${site.name}` },
      {
        name: "description",
        content: "The attorneys and staff of Parkar Attorneys Inc.",
      },
      { property: "og:title", content: `Our Team | ${site.name}` },
      { property: "og:description", content: "The people behind the practice." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="The people behind the practice."
        intro="Meet the firm's attorneys and professional staff, and find their direct contact details."
      />

      <section className="bg-ivory">
        <div className="container-editorial py-16 lg:py-24">
          {teamHasProfiles ? (
            <ul className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <li key={m.name} className="border-t border-border pt-6">
                  <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-muted">
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={`Portrait of ${m.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <UserRound
                        className="size-20 text-muted-foreground/30"
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h2 className="heading-serif text-2xl text-foreground">{m.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-forest">{m.position}</p>
                  <address className="mt-4 space-y-2 text-sm not-italic">
                    <p>
                      <a
                        className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                        href={`tel:${m.phone.replace(/\s/g, "")}`}
                      >
                        {m.phone}
                      </a>
                    </p>
                    <p>
                      <a
                        className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                        href={`mailto:${m.email}`}
                      >
                        {m.email}
                      </a>
                    </p>
                  </address>
                </li>
              ))}
            </ul>
          ) : (
            /* Designed empty state — profiles are withheld until the firm
               confirms its people. No invented names or portraits are shown. */
            <Reveal>
              <div className="border border-border bg-paper px-8 py-16 text-center lg:px-16 lg:py-24">
                <svg
                  viewBox="0 0 120 100"
                  fill="none"
                  className="mx-auto w-24 text-forest/25"
                  aria-hidden="true"
                >
                  <path d="M60 8v84M60 8l-44 12M60 8l44 12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 20l-12 22h24L16 20zM104 20l-12 22h24l-12-22z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 42c0 6.6 5.4 12 12 12s12-5.4 12-12M92 42c0 6.6 5.4 12 12 12s12-5.4 12-12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M36 92h48" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <h2 className="heading-serif mt-8 text-3xl text-foreground lg:text-4xl">
                  Team profiles are being prepared.
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  The firm's attorneys and staff will be introduced here once
                  their names, positions and verified qualifications have been
                  confirmed for publication.
                </p>
                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest"
                >
                  Enquire about the team
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
