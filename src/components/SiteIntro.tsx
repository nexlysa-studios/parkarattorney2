import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import logoAsset from "@/assets/ParkarA-logo.png";
import { easing } from "@/components/Reveal";
import { site } from "@/data/site";

type LogoPosition = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export function SiteIntro() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [logoPosition, setLogoPosition] = useState<LogoPosition | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (document.documentElement.dataset.siteIntro === "skip") {
      setVisible(false);
      return;
    }

    let cancelled = false;
    const startedAt = performance.now();
    let finishTimer = 0;
    const progressTimer = window.setInterval(() => {
      const next = Math.min(90, ((performance.now() - startedAt) / 1200) * 90);
      setProgress(next);
      if (next >= 90) window.clearInterval(progressTimer);
    }, 40);

    const loaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });

    Promise.all([loaded, new Promise<void>((resolve) => window.setTimeout(resolve, 1200))]).then(
      () => {
        if (cancelled) return;
        setProgress(100);
        finishTimer = window.setTimeout(() => {
          const logo = document.querySelector<HTMLImageElement>("[data-header-logo]");
          if (logo) {
            const rect = logo.getBoundingClientRect();
            setLogoPosition({
              left: rect.left,
              top: rect.top,
              width: rect.width,
              height: rect.height,
            });
          }
          setExiting(true);
        }, 220);
      },
    );

    return () => {
      cancelled = true;
      window.clearInterval(progressTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      role="status"
      aria-label="Loading"
      className="site-intro fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{
        duration: reduced ? 0.15 : 0.35,
        delay: exiting && !reduced ? 0.55 : 0,
        ease: easing,
      }}
      onAnimationComplete={() => {
        if (exiting) setVisible(false);
      }}
    >
      <motion.img
        src={logoAsset}
        alt={`${site.name} logo`}
        width={403}
        height={450}
        className="absolute h-auto w-44"
        style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        animate={
          logoPosition
            ? {
                left: logoPosition.left,
                top: logoPosition.top,
                width: logoPosition.width,
                height: logoPosition.height,
                x: 0,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: reduced ? 0.01 : 0.85,
          ease: easing,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[calc(50%-8.5rem)] h-px w-36 overflow-hidden bg-neutral-200"
      >
        <motion.span
          className="block h-full origin-left bg-forest"
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
