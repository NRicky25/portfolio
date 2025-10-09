"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/Timeline";
import { workExperience } from "@/data";

type WorkItem = {
  id: string | number;
  date: string | number;
  title: string;
  company?: string;
  period?: string; // e.g., "September 2025 - Present"
  location?: string;
  desc: string;
  bullets?: string[];
  thumbnail: string;
};

// 1) Normalize hyphen -> en-dash with proper spacing
const normalizeRange = (s?: string | number) =>
  s ? String(s).replace(/\s*-\s*/g, " \u2013 ") : "";

const Experience = () => {
  const data = (workExperience as WorkItem[]).map((w) => {
    const date = normalizeRange(w.date);
    const period = normalizeRange(w.period); // safe even if undefined

    return {
      // Keep the sticky label clean — just the date (or switch to w.title if you prefer)
      title: date || String(w.date),

      content: (
        <article className="group relative w-full rounded-2xl bg-black-400 border border-neutral-200/60 backdrop-blur p-5 md:p-7 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <Image
              src={w.thumbnail}
              alt={w.title}
              width={80}
              height={80}
              className="rounded-xl shrink-0 md:w-20 md:h-20 w-16 h-16 object-contain bg-neutral-100 dark:bg-neutral-900 p-2"
            />
            <header className="flex-1">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {w.title}
              </h3>

              {/* Company • Location (if you add them later) */}
              {(w.company || w.location) && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {[w.company, w.location].filter(Boolean).join(" · ")}
                </p>
              )}

              {/* Muted, compact date/period line */}
              {(date || period) && (
                <p className="text-xs md:text-sm text-neutral-500 mt-1">
                  {period || date}
                </p>
              )}
            </header>
          </div>

          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {w.desc}
          </p>

          {Array.isArray(w.bullets) && w.bullets.length > 0 && (
            <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
              {w.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </article>
      ),
    };
  });

  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-[#ffff99]">work experience</span>
      </h1>
      <div className="mt-12">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experience;
