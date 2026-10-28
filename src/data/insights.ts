/**
 * Draft insights (article) content.
 *
 * IMPORTANT: every article carries `draft: true`. The sample articles below
 * are clearly labelled draft content for layout development only — they are
 * not reviewed legal commentary and must be reviewed and approved by the firm
 * (and its legal reviewers) before being treated as published content.
 *
 * Never fabricate legal authorities, judgments or case citations. To add an
 * article: copy an entry, give it a unique slug, and fill in the blocks.
 */

import articleAgreements from "@/assets/article-agreements.jpg";
import articleProperty from "@/assets/article-property.jpg";
import articleConsultation from "@/assets/article-consultation.jpg";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO date
  readingTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: ArticleBlock[];
  draft: boolean;
}

export const articles: Article[] = [
  {
    slug: "understanding-commercial-agreements",
    title: "Understanding Commercial Agreements Before You Sign",
    category: "Commercial",
    date: "2026-10-12",
    readingTime: "6 min read",
    excerpt:
      "A signature is only the last step of an agreement. What matters most happens well before it — in the terms, the assumptions and the conversations that shaped them.",
    image: articleAgreements,
    imageAlt:
      "A drafted contract document and fountain pen on a dark oak desk",
    draft: true,
    body: [
      {
        type: "p",
        text: "Commercial agreements are where good intentions become enforceable obligations. Yet many businesses sign them with more attention to the price than to the terms — and discover the difference only when something goes wrong.",
      },
      {
        type: "h2",
        text: "Read the agreement as a story, not a list",
      },
      {
        type: "p",
        text: "Every contract tells a story: who the parties are, what each has promised, what happens if a promise is broken, and how the relationship ends. Reading a contract in that order — rather than hunting for the number — reveals the questions that matter: What exactly am I promising? What happens if the other party does not perform? How do we each get out?",
      },
      {
        type: "h2",
        text: "The clauses that decide most disputes",
      },
      {
        type: "list",
        items: [
          "Payment terms — not only the amount, but when, and what happens on late payment.",
          "Termination — who may end the agreement, on what notice, and with what consequences.",
          "Liability — who carries the risk when something fails, and whether that risk is capped.",
          "Dispute resolution — where and how a disagreement will be argued.",
        ],
      },
      {
        type: "p",
        text: "None of these clauses is exotic. Most disputes turn on exactly these four subjects, and almost all of them can be negotiated before signature at a fraction of the cost of arguing afterwards.",
      },
      {
        type: "quote",
        text: "The time to read a contract carefully is before you sign it — after signature, the agreement reads you.",
      },
      {
        type: "h2",
        text: "A simple discipline",
      },
      {
        type: "p",
        text: "Before signing any agreement of consequence, take three steps: read the whole document once without marking anything; list every term you do not understand; and ask a legal advisor about those terms before signature. The discipline is small; the protection is considerable.",
      },
      {
        type: "p",
        text: "This article is provided for general information only and does not constitute legal advice. Every agreement turns on its own facts and terms.",
      },
    ],
  },
  {
    slug: "navigating-a-property-transaction",
    title: "Navigating a Property Transaction in South Africa",
    category: "Property",
    date: "2026-09-28",
    readingTime: "7 min read",
    excerpt:
      "From acceptance of the offer to registration at the Deeds Office, a property transfer follows a defined path. Knowing the milestones makes the wait easier to understand.",
    image: articleProperty,
    imageAlt: "A modern South African suburban home in late-afternoon light",
    draft: true,
    body: [
      {
        type: "p",
        text: "For most people, buying or selling a home is the largest transaction they will ever complete. It is also one of the most structured: South African law requires a written agreement, the involvement of a conveyancer, and registration at the Deeds Office before ownership actually passes.",
      },
      {
        type: "h2",
        text: "The agreement comes first",
      },
      {
        type: "p",
        text: "Everything begins with the offer to purchase. It fixes the price, the conditions of sale, the deadlines and the disclosures. Because the deed of sale governs everything that follows, it deserves careful reading before signature — particularly the suspensive conditions, which determine when the agreement becomes binding at all.",
      },
      {
        type: "h2",
        text: "The milestones of a transfer",
      },
      {
        type: "list",
        items: [
          "Bond approval and any suspensive conditions are satisfied.",
          "The conveyancing attorney prepares the transfer documents and applies for a transfer duty receipt.",
          "The bond attorney and conveyancer link the new bond registration with the transfer.",
          "Documents are lodged simultaneously at the Deeds Office and, after examination, registered.",
          "The seller is paid and the buyer takes ownership of what the law now recognises.",
        ],
      },
      {
        type: "p",
        text: "A straightforward transfer typically takes two to three months. Delays usually trace back to bond approval, outstanding municipal clearance documents, or conditions in the agreement that were never quite clear.",
      },
      {
        type: "quote",
        text: "A transfer is a relay, not a sprint: the deal moves at the pace of its slowest document.",
      },
      {
        type: "h2",
        text: "Where buyers and sellers go wrong",
      },
      {
        type: "p",
        text: "The most common difficulties are preventable ones: signing before understanding a condition, failing to budget for transfer costs, or moving out before registration because a date in the agreement was misread. Independent advice on the agreement — before signing it — is the single most effective safeguard available to either party.",
      },
      {
        type: "p",
        text: "This article is provided for general information only and does not constitute legal advice. Property transactions should be assessed on their own terms and circumstances.",
      },
    ],
  },
  {
    slug: "preparing-for-your-first-consultation",
    title: "Preparing for Your First Legal Consultation",
    category: "Practice Guidance",
    date: "2026-09-10",
    readingTime: "4 min read",
    excerpt:
      "A good consultation starts before the meeting. Bringing the right documents — and the right questions — makes the first hour count.",
    image: articleConsultation,
    imageAlt: "An open notebook, pen and reading glasses on a linen desk mat",
    draft: true,
    body: [
      {
        type: "p",
        text: "A first consultation sets the direction of an entire matter. Clients who arrive prepared get more from it — not because they have legal knowledge, but because they bring what the advisor actually needs: facts, documents and honest questions.",
      },
      {
        type: "h2",
        text: "What to bring",
      },
      {
        type: "list",
        items: [
          "Every document touched by the matter — agreements, letters, messages, receipts.",
          "A short written timeline of events, in date order.",
          "A list of the people involved and their roles.",
          "Your questions, written down. The obvious ones belong on the list too.",
        ],
      },
      {
        type: "h2",
        text: "What to expect",
      },
      {
        type: "p",
        text: "A first consultation is mostly listening: the attorney will want the full history, without the summary. Expect questions that feel detailed — dates, amounts, exact words used. Those details are how legal advice becomes tailored rather than generic.",
      },
      {
        type: "quote",
        text: "Bring the whole story. The parts that seem unimportant are often the ones the law considers most.",
      },
      {
        type: "h2",
        text: "One caution before you go",
      },
      {
        type: "p",
        text: "Please do not send confidential documents, sensitive personal information or detailed case materials through an ordinary website enquiry form. The form is for initial, general enquiries only — detailed material belongs in a consultation, where it can be handled properly.",
      },
      {
        type: "p",
        text: "This article is provided for general information only and does not constitute legal advice.",
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
