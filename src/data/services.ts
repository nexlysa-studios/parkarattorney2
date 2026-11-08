/**
 * Confirmed practice areas and matter types supplied by the firm.
 */
export interface Service {
  slug: string;
  name: string;
  short: string;
  intro: string[];
  matters: string[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: "family-law",
    name: "Family Law",
    short:
      "Legal assistance with divorce, Islamic marriages and divorces, maintenance, care and contact, parenting plans and family disputes.",
    intro: [
      "Family law services include assistance with divorce proceedings and the legal matters that arise in relation to marriages, children and family disputes.",
      "The firm assists with both contested and uncontested divorces, maintenance applications, parenting plans and matters concerning parental responsibilities and rights.",
    ],
    matters: [
      "Contested and uncontested divorce proceedings",
      "Islamic divorces and Muslim marriages",
      "Child and spousal maintenance applications, variations and enforcement",
      "Care, contact and visitation arrangements",
      "Parenting plans",
      "Domestic family disputes",
    ],
    related: ["civil-litigation", "wills-estates"],
  },
  {
    slug: "corporate-commercial-law",
    name: "Corporate and Commercial Law",
    short:
      "Assistance with business structures, commercial agreements, recoveries, governance, regulatory compliance and commercial disputes.",
    intro: [
      "The firm assists businesses with company registrations and business structures, commercial agreements, corporate governance and regulatory requirements.",
      "Services also include assistance with commercial disputes, contractual breaches, debt and rental recoveries, commercial ejectments, franchising and licensing.",
    ],
    matters: [
      "Business formation, company registration and structuring",
      "Contract drafting and review",
      "Commercial ejectments and rental recoveries",
      "Debt and commercial recoveries",
      "Shareholder and partnership agreements",
      "Corporate governance and regulatory compliance",
      "Commercial disputes and litigation",
      "Franchising and licensing",
      "Breach of contract",
    ],
    related: ["civil-litigation", "evictions", "labour-employment"],
  },
  {
    slug: "evictions",
    name: "Evictions",
    short: "Legal assistance with eviction matters.",
    intro: [
      "The firm handles eviction matters. The relevant circumstances and next steps can be discussed with the firm.",
    ],
    matters: ["Evictions"],
    related: ["corporate-commercial-law", "civil-litigation"],
  },
  {
    slug: "civil-litigation",
    name: "Civil Litigation and Dispute Resolution",
    short:
      "Representation and assistance with civil court proceedings, claims, disputes, urgent applications and enforcement of court orders.",
    intro: [
      "The firm provides legal representation in civil proceedings in the High Court and Magistrates' Court, and assists with resolving disputes through negotiation, mediation and settlement.",
      "Civil litigation services include contractual, debt and property disputes, claims for damages, urgent applications and enforcement of court orders.",
    ],
    matters: [
      "High Court and Magistrates' Court litigation",
      "Contractual disputes",
      "Debt recovery",
      "Property disputes",
      "Interdicts and urgent applications",
      "Damages claims",
      "Delictual claims",
      "Negotiation, mediation and dispute settlement",
      "Enforcement of court orders",
    ],
    related: ["corporate-commercial-law", "evictions", "family-law"],
  },
  {
    slug: "wills-estates",
    name: "Wills, Estates, Trusts and Planning",
    short:
      "Assistance with wills, Islamic estate planning, trusts, deceased estate administration, curatorships and inheritance disputes.",
    intro: [
      "The firm assists with wills and estate planning, including Islamic wills structured to accommodate Islamic inheritance principles subject to applicable South African law.",
      "Services also cover trusts, deceased estate administration, executorship matters, curatorships and disputes relating to wills, estates and inheritance rights.",
    ],
    matters: [
      "Drafting wills",
      "Islamic wills",
      "Establishment, structuring and administration of trusts",
      "Deceased estate administration",
      "Estate planning",
      "Curatorships",
      "Executorship matters",
      "Inheritance disputes",
    ],
    related: ["family-law", "civil-litigation"],
  },
  {
    slug: "criminal-law",
    name: "Criminal Law",
    short:
      "Representation and assistance with criminal defence, bail, trials, extradition, appeals and protection order applications.",
    intro: [
      "The firm provides representation and defence in criminal proceedings, including bail applications, trials and criminal appeals.",
      "Criminal law services also include assistance with extradition and POCA matters, as well as domestic violence, harassment and protection order applications.",
    ],
    matters: [
      "Criminal defence",
      "Bail applications, including opposed applications and variations",
      "Criminal trials",
      "Extradition proceedings",
      "Prevention of Organised Crime Act (POCA) matters",
      "Domestic violence applications",
      "Harassment applications",
      "Protection orders",
      "Criminal appeals",
      "Mediation and dispute resolution where appropriate",
    ],
    related: ["civil-litigation"],
  },
  {
    slug: "immigration-law",
    name: "Immigration Law",
    short:
      "Assistance with temporary and permanent residence, work, family, business and other visa applications, renewals and appeals.",
    intro: [
      "The firm assists individuals and businesses with South African visa and immigration applications, renewals, extensions, appeals and waivers.",
      "Immigration advisory services include guidance on visa or permit categories based on personal or business circumstances.",
    ],
    matters: [
      "Temporary residence visas",
      "Spousal and life partner visas",
      "Work visas",
      "Corporate visas",
      "Intra-company transfer visas",
      "Business and investment visas",
      "Exchange visas",
      "Permanent residence applications",
      "Visa renewals and extensions",
      "Visa appeals and waivers",
      "Immigration advisory services",
    ],
    related: ["corporate-commercial-law", "family-law"],
  },
  {
    slug: "labour-employment",
    name: "Labour and Employment Law",
    short:
      "Assistance with employment agreements, workplace processes, labour disputes, CCMA and Labour Court proceedings.",
    intro: [
      "The firm assists with employment contracts, workplace policies and processes, and disputes involving employers and employees.",
      "Services include representation in disciplinary and CCMA proceedings, Labour Court litigation, retrenchment matters and wage or salary disputes.",
    ],
    matters: [
      "Employment contracts",
      "Disciplinary hearings and workplace investigations",
      "Unfair dismissal",
      "Unfair labour practices",
      "CCMA proceedings",
      "Labour Court litigation",
      "Retrenchments",
      "Workplace policies",
      "Restraint of trade agreements",
      "Wage and salary disputes",
      "Workplace grievances",
      "Employment equity",
    ],
    related: ["corporate-commercial-law", "civil-litigation"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const relatedServices = (slug: string): Service[] => {
  const svc = getService(slug);
  if (!svc) return [];
  return svc.related.map((s) => getService(s)).filter((s): s is Service => Boolean(s));
};
