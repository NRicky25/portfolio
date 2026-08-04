"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious() ?? 0;
      const direction = current - prev;
      if (scrollYProgress.get() < 0.05) setVisible(true);
      else setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 bottom-6 mx-auto z-[5000]",
          "flex items-center justify-center",
          "h-12 max-w-fit", // ← fixed height for the bar
          "rounded-full border border-transparent dark:border-white/20",
          "dark:bg-black bg-white",
          "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          "px-3", // ← no vertical padding on wrapper
          // If this made it look off before, you can remove it. It only affects iOS.
          // "pb-[env(safe-area-inset-bottom)]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "flex items-center justify-center gap-2",
              "h-10 px-4 rounded-full", // ← link matches bar height minus small inset
              "text-sm font-medium leading-none", // ← kill extra line-height
              "text-neutral-700 dark:text-neutral-50",
              "hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
            )}
          >
            {navItem.icon && <span className="sm:hidden">{navItem.icon}</span>}
            <span className="leading-none">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
