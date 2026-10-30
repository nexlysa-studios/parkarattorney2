import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${site.name}` },
      {
        name: "description",
        content: "How Parkar Attorneys Inc. handles personal information submitted through this website, drafted with the Protection of Personal Information Act (POPIA) in mind.",
      },
      { property: "og:title", content: `Privacy Policy | ${site.name}` },
      { property: "og:description", content: "How the firm handles personal information submitted through this website." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPolicy,
});

const sections: Array<{ heading: string; paras: string[] }> = [
  {
    heading: "About this policy",
    paras: [
      "This policy explains how Parkar Attorneys Inc. handles personal information submitted through this website. It is drafted with the Protection of Personal Information Act, 2013 (POPIA) in mind.",
      "This version is a reviewable placeholder: it must be reviewed and approved by the firm, and checked against its actual data-handling practices, before it is treated as the firm's published policy. It does not itself constitute legal advice.",
    ],
  },
  {
    heading: "What we collect through this website",
    paras: [
      "When you submit an enquiry through the contact form, we collect the details you choose to provide: your name, email address, optional phone number, the category of your enquiry, your preferred contact method and your message.",
      "We collect only the information necessary to process an initial enquiry. We do not ask for, and ask you not to submit, confidential documents, sensitive personal information or detailed case materials through an ordinary website form.",
      "The website does not use advertising trackers. Like most websites, basic technical records (such as server logs) may be produced when the site is accessed.",
    ],
  },
  {
    heading: "How your information is used",
    paras: [
      "Information submitted through the contact form is used for one purpose: to read, understand and respond to your enquiry, and to communicate with you by your preferred contact method about it.",
      "Submitting the form does not create an attorney-client relationship, and it does not guarantee confidentiality beyond what applicable law and the firm's policies provide.",
      "We do not sell personal information, and we do not use enquiry details for marketing without consent.",
    ],
  },
  {
    heading: "Storage, security and retention",
    paras: [
      "Enquiries are stored on the firm's managed hosting infrastructure with access restricted to the firm. Technical and organisational measures are applied to protect the information against loss or unauthorised access.",
      "Enquiry records are retained only for as long as needed to handle the enquiry and any follow-up, or as required by law or by the firm's record-keeping obligations.",
    ],
  },
  {
    heading: "Your rights under POPIA",
    paras: [
      "Subject to applicable law, you may ask the firm to confirm what personal information it holds about you, request the correction or deletion of information, object to its processing, or lodge a complaint with the Information Regulator of South Africa.",
      "Requests can be made using the firm's contact details once published, or through the contact form.",
    ],
  },
  {
    heading: "Changes to this policy",
    paras: [
      "This policy may be updated as the firm's practices are confirmed and refined. The version published here will always show its most recent revision.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How personal information submitted through this website is handled."
      />
      <section className="bg-ivory">
        <div className="container-editorial py-16 lg:py-24">
          <Reveal>
            <p className="border-l-2 border-champagne bg-paper p-5 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Draft for review.</span>{" "}
              This policy is a reviewable placeholder. It must be approved by
              {` ${site.name}`} before it is treated as the firm's published
              policy.
            </p>
          </Reveal>
          <nav aria-label="Breadcrumb" className="mt-10 text-xs text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="link-underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                Privacy Policy
              </li>
            </ol>
          </nav>
          <div className="mx-auto max-w-2xl">
            {sections.map((s) => (
              <Reveal key={s.heading}>
                <section className="mt-12 first:mt-0">
                  <h2 className="heading-serif text-2xl text-foreground">{s.heading}</h2>
                  {s.paras.map((p) => (
                    <p key={p.slice(0, 30)} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}
            <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
              Last revised: October 2026 — draft pending firm approval.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
