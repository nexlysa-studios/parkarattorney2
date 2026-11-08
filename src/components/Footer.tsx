import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ParkarA-logo.png";
import { site, navLinks } from "@/data/site";
import { services } from "@/data/services";

/**
 * Site footer. Contact rows display an "awaiting confirmation" placeholder
 * until the firm supplies verified details — never an invented number,
 * address or email.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const c = site.contact;

  const contactRows: Array<[string, string | null]> = [
    ["Telephone", c.phoneDisplay ?? c.phone],
    ["Email", c.email],
    ["Address", c.address],
    ["Office hours", c.hours],
  ];

  return (
    <footer className="border-t border-border bg-ivory">
      <div className="container-editorial py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img
              src={logoAsset}
              alt={`${site.name} logo`}
              width={124}
              height={107}
              className="h-16 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer — site" className="lg:col-span-2">
            <h2 className="eyebrow text-foreground/70">Navigate</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="link-underline text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer — services" className="lg:col-span-3">
            <h2 className="eyebrow text-foreground/70">Legal Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="link-underline text-muted-foreground hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-foreground/70">Contact</h2>
            <dl className="mt-5 space-y-3 text-sm">
              {contactRows.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs tracking-wide text-muted-foreground/70">{label}</dt>
                  <dd className={value ? "text-foreground" : "text-muted-foreground/50 italic"}>
                    {value ?? "To be confirmed by the firm"}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground/70">
            Legal insights marked as drafts are pending firm review.
          </p>
        </div>
      </div>
    </footer>
  );
}
