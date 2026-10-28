/**
 * Draft practice-area content for Parkar Attorneys Inc.
 *
 * IMPORTANT: every entry below carries `provisional: true`. These categories
 * are scaffolding for layout development only — they are NOT confirmed
 * services of the firm. Replace or remove entries once the firm approves its
 * actual practice areas. The service pages, homepage list and contact-form
 * categories all read from this single structure.
 *
 * To add a service: copy an entry, give it a unique slug, and fill in the
 * plain-English copy. The route /services/<slug> is generated automatically.
 */

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  intro: string[];
  matters: string[];
  process: string[];
  faqs: ServiceFaq[];
  related: string[];
  provisional: boolean;
}

export const services: Service[] = [
  {
    slug: "corporate-commercial-law",
    name: "Corporate and Commercial Law",
    short:
      "Practical legal support for businesses — from formation and commercial agreements to governance and day-to-day advisory work.",
    intro: [
      "Sound commercial advice is about more than paperwork. It is about understanding a business, its ambitions and its risks, and then putting the right agreements and structures in place to support them.",
      "We assist businesses and their owners with clear, practical counsel on the legal questions that arise in ordinary commercial life — explained in plain language, with the implications spelled out before decisions are made.",
    ],
    matters: [
      "Company formation and registration",
      "Shareholder and partnership agreements",
      "Commercial contracts and service agreements",
      "Sale of business and merger transactions",
      "Corporate governance and company secretarial support",
      "General commercial advisory work",
    ],
    process: [
      "We begin by understanding the business, the transaction and the commercial objective behind it.",
      "We assess the legal landscape and explain the available options, with their risks and benefits.",
      "We draft, review or negotiate the necessary agreements, keeping the language clear and the terms purposeful.",
      "We remain available as the relationship develops — for review, renewal or the next matter.",
    ],
    faqs: [
      {
        question: "Do I need a lawyer to sign a commercial contract?",
        answer:
          "You are not legally required to, but agreements signed without advice often contain terms that only become a problem later. Having an agreement reviewed before signing is usually far less costly than disputing it afterwards.",
      },
      {
        question: "At what stage should a business involve an attorney?",
        answer:
          "Early. Setting the right structure and agreements at the start prevents most of the disputes we see later. A short consultation at the outset is an investment, not an expense.",
      },
      {
        question: "Can you review a contract another party has drafted?",
        answer:
          "Yes. We review agreements drafted by other parties, explain the terms in plain language, and suggest amendments where the terms are unclear or one-sided.",
      },
    ],
    related: ["civil-litigation", "property-conveyancing"],
    provisional: true,
  },
  {
    slug: "civil-litigation",
    name: "Civil Litigation and Dispute Resolution",
    short:
      "Careful, strategic handling of disputes — in negotiation, in court, and everywhere in between.",
    intro: [
      "Not every dispute belongs in court, and not every dispute can be avoided. Good litigation practice is knowing the difference — and preparing each matter as though it will be tested.",
      "We assist individuals and businesses with the resolution of civil disputes, always weighing the cost, the risk and the commercial or personal reality before recommending a course of action.",
    ],
    matters: [
      "Contractual and commercial disputes",
      "Debt recovery and enforcement",
      "Magistrates' Court and High Court litigation",
      "Alternative dispute resolution and mediation",
      "Appeals and reviews",
      "Pre-litigation negotiation and demand letters",
    ],
    process: [
      "We listen to the full history of the dispute and review the underlying documents.",
      "We assess prospects honestly — including cost, time and risk — before advising on a route.",
      "Where settlement is achievable on fair terms, we pursue it; where it is not, we litigate with preparation and care.",
      "We keep clients informed at every stage, in language they can act on.",
    ],
    faqs: [
      {
        question: "How long does litigation take?",
        answer:
          "It depends on the court, the complexity of the matter and the conduct of the parties. Simple matters may resolve in weeks through negotiation; contested litigation can run for a year or longer. We give a realistic indication once we have seen the papers.",
      },
      {
        question: "Is going to court the only option?",
        answer:
          "No. Many disputes are resolved through negotiation, demand letters or mediation without a court hearing. We consider every route before recommending litigation.",
      },
      {
        question: "What will it cost?",
        answer:
          "Litigation costs depend on the scale of the dispute and the route followed. We discuss fees and likely disbursements upfront, so that decisions can be made with full knowledge of the financial commitment.",
      },
    ],
    related: ["corporate-commercial-law", "labour-employment"],
    provisional: true,
  },
  {
    slug: "property-conveyancing",
    name: "Property Law and Conveyancing",
    short:
      "Guiding property transactions from offer to registration — with the detail handled and the process explained.",
    intro: [
      "A property transaction is often the largest financial commitment a person makes. It deserves careful, diligent handling — and an attorney who explains the process rather than hiding it in jargon.",
      "We attend to the legal steps of buying, selling and registering property, and advise on the agreements and disputes that arise around land and buildings.",
    ],
    matters: [
      "Conveyancing — transfers and bond registrations",
      "Offers to purchase and sale agreements",
      "Sectional title and scheme matters",
      "Lease agreements (commercial and residential)",
      "Property disputes and boundaries",
      "Deeds office queries and corrections",
    ],
    process: [
      "We review the agreement before signature where possible, so the terms are understood upfront.",
      "Once instructing, we attend to the deeds search, drafts and lodgement with the Deeds Office.",
      "We keep buyer, seller and agent informed of progress at each milestone.",
      "We confirm registration and attend to the final financial settlements.",
    ],
    faqs: [
      {
        question: "What does a conveyancer do?",
        answer:
          "The conveyancer is the attorney who attends to the legal transfer of the property into the buyer's name at the Deeds Office. In South Africa, transfer must be signed and registered by a conveyancer.",
      },
      {
        question: "Who appoints the conveyancer in a sale?",
        answer:
          "By custom, the seller appoints the conveyancing attorney. Buyers may nonetheless seek independent advice on the agreement before signing.",
      },
      {
        question: "How long does a transfer take?",
        answer:
          "A typical transfer takes two to three months from acceptance of the offer, depending on bond approval, the Deeds Office workload and conditions in the agreement. We indicate expected timeframes on each instruction.",
      },
    ],
    related: ["wills-estates", "corporate-commercial-law"],
    provisional: true,
  },
  {
    slug: "family-law",
    name: "Family Law",
    short:
      "Compassionate, practical guidance through divorce, children's matters and family legal arrangements.",
    intro: [
      "Family matters are among the most personal legal questions a person will ever face. They call for clear advice, steady nerves and genuine care — not escalation.",
      "We guide clients through divorce, arrangements concerning children, and the agreements that protect families, always aiming to reduce conflict and preserve dignity.",
    ],
    matters: [
      "Divorce and the associated consequences",
      "Parenting plans, care and contact",
      "Maintenance enquiries",
      "Antenuptial and postnuptial agreements",
      "Cohabitation agreements",
      "Guardianship and related applications",
    ],
    process: [
      "We begin with a confidential consultation to understand the family's circumstances and priorities.",
      "We explain the legal position and the realistic options — including mediation where suitable.",
      "Where negotiation is possible, we pursue it; where court is necessary, we prepare the matter thoroughly.",
      "We keep the focus on the outcome that serves the family best in the long term.",
    ],
    faqs: [
      {
        question: "Does every divorce end up in court?",
        answer:
          "No. Many divorces are settled by agreement and finalised on unopposed papers, without a contested hearing. Settled matters are quicker, cheaper and usually better for everyone involved.",
      },
      {
        question: "What happens to the children in a divorce?",
        answer:
          "The children's best interests come first. Parents are encouraged to agree on a parenting plan covering care, contact and maintenance; the court ratifies such plans where they serve the children.",
      },
      {
        question: "Should we sign an antenuptial agreement?",
        answer:
          "An antenuptial agreement records how property will be shared if the marriage ends. Many couples choose one to keep estates separate or protect a business. We explain the matrimonial property systems so couples can decide with full knowledge.",
      },
    ],
    related: ["wills-estates", "civil-litigation"],
    provisional: true,
  },
  {
    slug: "labour-employment",
    name: "Labour and Employment Law",
    short:
      "Balanced employment-law advice for employers and employees — from contracts to disputes.",
    intro: [
      "Employment relationships are governed by a detailed legal framework, and mistakes on either side carry real consequences. Clear advice at the right moment prevents most of it.",
      "We advise on employment contracts, workplace discipline, dismissals and disputes before the CCMA and labour courts — for employers who want to get it right and employees who need their rights defended.",
    ],
    matters: [
      "Employment contracts and policies",
      "Dismissals and disciplinary processes",
      "CCMA and bargaining council disputes",
      "Retrenchments and restructuring",
      "Restraint of trade agreements",
      "Discrimination and workplace grievances",
    ],
    process: [
      "We take a full account of the employment relationship and the documents that govern it.",
      "We explain the applicable framework and the realistic options for resolution.",
      "We assist with process — whether drafting, disciplinary proceedings or conciliation and arbitration.",
      "We help put durable contracts and policies in place so the same problem does not recur.",
    ],
    faqs: [
      {
        question: "Can an employee be dismissed without a hearing?",
        answer:
          "In cases of serious misconduct, summary dismissal can occur, but the process must still be fair. Procedural fairness is a legal requirement in nearly every dismissal — shortcuts expose employers to successful disputes.",
      },
      {
        question: "How long do I have to refer a dispute to the CCMA?",
        answer:
          "Most unfair dismissal disputes must be referred within 30 days of the date of dismissal. It is important to act quickly — late referrals need condonation, which is not guaranteed.",
      },
      {
        question: "Do you act for employers, employees or both?",
        answer:
          "We advise both employers and employees, always taking care to avoid conflicts of interest. The firm confirms at the outset who it can act for in a given matter.",
      },
    ],
    related: ["corporate-commercial-law", "civil-litigation"],
    provisional: true,
  },
  {
    slug: "wills-estates",
    name: "Wills, Estates and Estate Planning",
    short:
      "Orderly planning for the future — wills, estate administration and the arrangements that spare families uncertainty.",
    intro: [
      "A considered estate plan is one of the most valuable things a person can leave their family. It turns a difficult time into a managed process, rather than a dispute or a delay.",
      "We assist with drafting wills, planning estates and administering deceased estates — with care for both the legal detail and the people involved.",
    ],
    matters: [
      "Drafting and updating wills",
      "Estate planning and structuring",
      "Administration of deceased estates",
      "Reporting to the Master of the High Court",
      "Trusts for minor beneficiaries",
      "Estate disputes",
    ],
    process: [
      "We take a full inventory of the estate and the family's circumstances.",
      "We advise on the will's content and the structuring of bequests, beneficiaries and guardianship.",
      "We draft or update the will and store it where executors and family can locate it.",
      "On death, we administer the estate: reporting to the Master, attending to the liquidation and distribution account, and finalising transfers to beneficiaries.",
    ],
    faqs: [
      {
        question: "Do I really need a will?",
        answer:
          "Without a valid will, an estate is distributed according to the Intestate Succession Act — which may not match the family's wishes, and can cause avoidable delay and cost. A will is the simplest way to keep control of the outcome.",
      },
      {
        question: "How often should a will be updated?",
        answer:
          "After any major life change — marriage, divorce, a birth, the death of a beneficiary or a significant change in assets. We recommend reviewing a will every few years even without changes.",
      },
      {
        question: "What does winding up an estate involve?",
        answer:
          "The estate is reported to the Master of the High Court, an executor is appointed, assets are gathered, debts are paid, and the balance is distributed to beneficiaries under a plan approved by the Master. We guide families through each step.",
      },
    ],
    related: ["property-conveyancing", "family-law"],
    provisional: true,
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export const relatedServices = (slug: string): Service[] => {
  const svc = getService(slug);
  if (!svc) return [];
  return svc.related
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s));
};
