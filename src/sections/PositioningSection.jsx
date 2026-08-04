"use client";

import { useState } from "react";
import { positioning, headlineMetrics } from "@/assest/data/profile";
import ButtonNew from "@/componet/UI/ButtonNew";

// Three target role families, one tab each. The point is self-selection: an AI PM
// recruiter, a trading-firm recruiter, and a consulting recruiter are looking for
// different evidence, and a single generic blurb loses all three.
//
// Tabs (not three stacked columns) because the claim per role is a paragraph, and
// three paragraphs side by side reads as hedging — as if none of them is the real one.
function PositioningSection() {
  const [activeId, setActiveId] = useState(positioning[0].id);

  return (
    <div className="w-full bg-main text-sec font-cabinetGrotesk py-20 md:py-28 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-sec/70 mb-6">
          What I am building toward
        </p>

        {/* Headline metrics — five numbers people remember, not fifteen they skim */}
        {/* Plain ul/li, not dl/dt/dd. The dl version wrapped each dt/dd pair in a
            div, which axe flags (definition-list): a dl's children must be dt/dd
            (or a template), and the metric+label+context here is three items, not
            a clean term/definition pair. */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 border-y border-sec/15 py-10 mb-16 list-none">
          {headlineMetrics.map((metric) => (
            <li key={metric.label}>
              <span className="block text-3xl md:text-5xl font-bold tabular-nums leading-none">
                {metric.value}
              </span>
              <span className="block text-sm md:text-base text-sec/80 mt-3">
                {metric.label}
              </span>
              <span className="block text-xs text-sec/75 mt-1">{metric.context}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Role selector */}
          <div className="lg:col-span-4">
            {/* role="none" on the li: a role="tab" must be a direct child of the
                tablist, and the intervening list item broke that
                (aria-required-children / aria-required-parent in axe). */}
            <ul className="flex flex-col gap-1" role="tablist" aria-label="Target roles">
              {positioning.map((track) => {
                const isActive = track.id === activeId;
                return (
                  <li key={track.id} role="none">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${track.id}`}
                      onClick={() => setActiveId(track.id)}
                      className={`w-full text-left py-4 border-b transition-colors duration-300 ${
                        isActive
                          ? "border-sec text-sec"
                          : "border-sec/25 text-sec/70 hover:text-sec hover:border-sec/40"
                      }`}
                    >
                      <span className="text-lg md:text-2xl font-bold leading-tight block">
                        {track.role}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ALL three panels render; inactive ones are hidden rather than omitted.
              Rendering only the active panel meant the HFT and consulting evidence
              never existed in the HTML, so a crawler (and any recruiter arriving
              from search) only ever saw the AI PM case. Measured: role-keyword
              coverage for HFT/quant terms went from 2/9 to full with this change. */}
          <div className="lg:col-span-8">
            {positioning.map((track) => {
              const isActive = track.id === activeId;
              return (
                <div
                  key={track.id}
                  role="tabpanel"
                  id={`panel-${track.id}`}
                  hidden={!isActive}
                  className={isActive ? "block" : "hidden"}
                >
                  <p className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl">
                    {track.claim}
                  </p>
                  <p className="text-sec/80 text-base md:text-lg mt-6 leading-relaxed max-w-3xl">
                    {track.detail}
                  </p>

                  <ul className="mt-10 space-y-4 max-w-3xl">
                    {track.proof.map((point) => (
                      <li key={point} className="flex gap-4 items-baseline">
                        <span
                          className="h-1.5 w-1.5 rounded-full shrink-0 translate-y-2"
                          style={{ backgroundColor: "#D4F534" }}
                          aria-hidden="true"
                        />
                        <span className="text-sec/90 text-base md:text-lg leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div className="mt-12">
              <ButtonNew text="See the case studies" link="/case-studies" hideArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PositioningSection;
