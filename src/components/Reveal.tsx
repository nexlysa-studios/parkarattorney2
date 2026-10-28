import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll-triggered reveal: fades in and rises slightly as the element
 * enters the viewport. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered line/word reveal for hero headings. */
export const heroContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

export const heroLineVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing },
  },
};

export { easing };
