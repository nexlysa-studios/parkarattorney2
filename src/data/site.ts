/**
 * Site-wide settings for Parkar Attorneys Inc.
 *
 * Fields marked `null` with a PLACEHOLDER comment are intentionally empty:
 * they will be activated the moment the firm supplies verified details.
 * Never invent contact details, addresses or hours — fill these in only
 * from information confirmed by the firm.
 */

export const site = {
  name: "Parkar Attorneys Inc.",
  shortName: "Parkar Attorneys",
  eyebrowName: "Parkar Attorneys Inc.",
  description:
    "A South African legal practice assisting with family, corporate and commercial, eviction, civil litigation, wills and estates, criminal, immigration, and labour matters.",
  // PLACEHOLDER: tagline pending firm approval — provisional marketing copy.
  tagline: "Clarity in Law. Confidence in Every Step.",
  heroSupport:
    "Professional legal guidance grounded in careful thinking, clear communication, and a considered approach to every matter.",
  introStatement: "Every legal matter deserves clarity, diligence, and a considered strategy.",
  introSupport:
    "We approach each matter with careful attention to its facts, its context and the people behind it — explaining options plainly and building a strategy that moves you forward with confidence.",
  firmIntroHeading: "A considered approach to legal practice.",
  firmIntroBody:
    "Parkar Attorneys Inc. is a South African legal practice built on careful thinking and clear communication. We take the time to understand each matter properly before advising — because good counsel begins with listening.",
  // PLACEHOLDER: founding date, membership bodies and office location are
  // withheld until the firm confirms them.
  foundedNote: null as string | null,
  locationNote: null as string | null,

  contact: {
    // PLACEHOLDER: no live contact details yet. When the firm supplies them,
    // fill these in — the site activates click-to-call, email and WhatsApp
    // automatically once they are non-null.
    phone: null as string | null,
    phoneDisplay: null as string | null,
    email: null as string | null,
    whatsapp: null as string | null,
    whatsappDisplay: null as string | null,
    address: null as string | null,
    hours: null as string | null,
  },
};

export const navLinks = [
  { label: "Our Firm", to: "/about" },
  { label: "Legal Services", to: "/services" },
  { label: "Our Team", to: "/team" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

/** Confirmed enquiry categories supplied by the firm. */
export const enquiryCategories = [
  "General enquiry",
  "Family Law",
  "Corporate and Commercial Law",
  "Evictions",
  "Civil Litigation and Dispute Resolution",
  "Wills, Estates, Trusts and Planning",
  "Criminal Law",
  "Immigration Law",
  "Labour and Employment Law",
] as const;
