import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/ParkarA-logo.png";
import { site, navLinks } from "@/data/site";
import { easing } from "@/components/Reveal";

/**
 * Site navigation. Translucent ivory glass over the homepage hero, easing
 * into a solid ivory bar with a hairline border once the page scrolls.
 * On interior pages it starts solid.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();
  const onHome = pathname === "/";
  const glass = onHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-ivory focus:px-4 focus:py-2 focus:text-foreground"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
          glass
            ? "border-b border-ivory/20 bg-ivory/70 shadow-sm backdrop-blur-xl"
            : "border-b border-border/70 bg-ivory/75 shadow-sm backdrop-blur-xl"
        }`}
      >
        <div className="container-editorial flex h-[4.25rem] items-center justify-between gap-6 lg:h-20">
          <Link to="/" aria-label={`${site.name} — home`} className="flex shrink-0 items-center">
            <img
              src={logoAsset}
              alt={`${site.name} logo`}
              width={124}
              height={107}
              className="h-11 w-auto lg:h-14"
              data-header-logo
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="link-underline text-[0.8rem] font-semibold tracking-wide text-foreground/80 transition-colors hover:text-foreground data-[status=active]:text-forest"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="group hidden items-center gap-2 border border-forest bg-forest px-5 py-2.5 text-[0.78rem] font-semibold tracking-wide text-ivory transition-colors duration-300 hover:bg-evergreen lg:inline-flex"
            >
              Request a Consultation
              <ArrowRight
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-accent lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduced ? 1 : 0 }}
            transition={{ duration: 0.35, ease: easing }}
            className="fixed inset-0 z-40 flex flex-col bg-evergreen lg:hidden"
          >
            <div className="flex h-[4.25rem] items-center px-6">
              <img src={logoAsset} alt="" className="h-10 w-auto rounded-sm bg-ivory p-1" />
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-8">
              <ul className="space-y-2">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: reduced ? 1 : 0, x: reduced ? 0 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: easing }}
                  >
                    <Link
                      to={l.to}
                      className="block py-3 font-serif text-4xl text-ivory"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: reduced ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 bg-ivory px-6 py-3.5 text-sm font-semibold text-evergreen"
                >
                  Request a Consultation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </nav>
            <p className="px-8 pb-10 text-xs tracking-wide text-ivory/50">{site.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
