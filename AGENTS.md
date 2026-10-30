# AGENTS.md

<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- **Never invent firm facts.** All real firm details (contact info, address, hours, team members, credentials, founding date, memberships) live as `null`/empty placeholders in `src/data/site.ts` and `src/data/team.ts` until the firm supplies verified details. The UI renders "To be confirmed" states and activates click-to-call/email/WhatsApp automatically when those fields become non-null. Why: the build prompt forbids fabricated legal/firm information (POPIA + professional-conduct risk).
- **Content is data, not markup.** Practice areas (`src/data/services.ts`), insights (`src/data/insights.ts`), team (`src/data/team.ts`) and site settings (`src/data/site.ts`) are single editable sources; pages render from them. Every draft item carries `provisional`/`draft` flags that render as "pending firm review" labels. Why: the firm must be able to replace placeholder content without redesign.
- **Routes:** `/`, `/about`, `/services` (+`/services/$slug`), `/team`, `/insights` (+`/insights/$slug`), `/contact`, `/privacy-policy`, `/sitemap[.]xml`. Layout routes (`services.tsx`, `insights.tsx`) render only `<Outlet/>`; their `head()` is minimal because each leaf route owns full metadata.
- **Contact enquiries** are stored in the `enquiries` table via `src/lib/enquiries.functions.ts` (public POST, zod-validated, honeypot + elapsed-time bot checks that silently discard without reporting failure). RLS: anon/authenticated INSERT only.
- Design system tokens (brand palette, Cormorant Garamond/Manrope) live in `src/styles.css`; components use semantic tokens only (no raw color utilities).
