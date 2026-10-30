import { Reveal } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Understand the Matter",
    body: "We begin with the full story — the facts, the documents and the objective — before forming any view.",
  },
  {
    n: "02",
    title: "Assess the Options",
    body: "We set out the realistic routes available, with their costs, risks and likely consequences stated plainly.",
  },
  {
    n: "03",
    title: "Develop a Strategy",
    body: "Together with the client, we settle on a course of action and the steps required to pursue it properly.",
  },
  {
    n: "04",
    title: "Move Forward with Clarity",
    body: "We execute the agreed strategy, keeping the client informed at every stage in language they can act on.",
  },
];

/**
 * The firm's proposed client journey. These steps describe a process, not a
 * promised outcome — copy is provisional and subject to the firm's approval.
 */
export function ApproachSection() {
  return (
    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal key={s.n} delay={i * 0.1}>
          <div className="group relative pt-8">
            <span
              aria-hidden="true"
              className="accent-line absolute left-0 top-0 w-10 transition-all duration-700 group-hover:w-full"
            />
            <span className="font-serif text-3xl text-champagne">{s.n}</span>
            <h3 className="mt-3 font-serif text-2xl text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
