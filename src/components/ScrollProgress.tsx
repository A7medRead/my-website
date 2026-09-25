"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const easedProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <motion.div
        className="h-full origin-left bg-gradient-to-r rtl:origin-right rtl:bg-gradient-to-l from-signal via-[#e3c557] to-[#9bd4a5] shadow-[0_0_12px_rgba(201,162,39,0.65)]"
        style={{ scaleX: reduce ? scrollYProgress : easedProgress }}
      />
    </div>
  );
}
