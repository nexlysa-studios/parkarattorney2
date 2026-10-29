import { Reveal } from "@/components/Reveal";

/** Shared evergreen page header band for interior pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-evergreen pt-28 text-ivory lg:pt-40">
      <div className="container-editorial pb-16 lg:pb-24">
        <Reveal y={16}>
          <p className="eyebrow text-champagne/90">{eyebrow}</p>
          <h1 className="heading-serif mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/75">{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
