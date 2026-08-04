"use client";

import { useState } from "react";
import Navbar from "@/componet/Navbar";
import Footer from "@/componet/Footer/Footer";
import Curve from "@/componet/UI/NavCurve";
import SEO from "@/componet/SEO/Seo";
import ButtonNew from "@/componet/UI/ButtonNew";
import { publishedCaseStudies } from "@/assest/data/caseStudies";
import { MEDIUM_URL } from "@/assest/data/profile";

// Sticky rail on the left, numbered sections on the right. Deliberately
// document-like rather than card-grid: these read as engagement write-ups, which
// is the point for consulting and PM reviewers.
function CaseStudy({ study, index }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-sec/15 py-10 md:py-14">
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-baseline gap-4">
            <span className="text-sec/70 text-sm font-light tabular-nums">{number}</span>
            <span
              className="text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full border"
              style={{ borderColor: study.accent, backgroundColor: `${study.accent}22` }}
            >
              {study.difficulty}
            </span>
          </div>
          <p className="text-sec/75 text-sm mt-4">{study.track}</p>
          <p className="text-sec/70 text-sm">{study.duration}</p>

          {/* ul, not dl: axe's definition-list rule rejects div wrappers between
              dl and dt/dd, and these are stat blocks rather than term/definition. */}
          <ul className="mt-6 list-none flex flex-wrap gap-x-8 gap-y-4">
            {study.metrics.map((metric) => (
              <li key={metric.label}>
                <span className="block text-2xl md:text-3xl font-bold text-sec tabular-nums">
                  {metric.value}
                </span>
                <span className="block text-xs text-sec/75 mt-1 max-w-[12rem]">
                  {metric.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-sec leading-tight">
            {study.title}
          </h2>
          <p className="text-sec/75 text-base md:text-lg mt-4 italic">{study.question}</p>

          <div
            className="mt-6 border-l-2 pl-5 md:pl-6"
            style={{ borderColor: study.accent }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-sec/70 mb-2">
              Executive summary
            </h3>
            <p className="text-sec/90 text-base md:text-lg leading-relaxed">
              {study.executiveSummary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {study.frameworks.map((framework) => (
              <span
                key={framework}
                className="text-xs px-3 py-1.5 rounded-full bg-sec/5 text-sec/80 border border-sec/20"
              >
                {framework}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            className="mt-8 text-sm uppercase tracking-[0.2em] text-sec/90 hover:text-sec border-b border-sec/30 hover:border-sec pb-1 transition-colors"
          >
            {isOpen ? "Collapse analysis" : `Read the full analysis (${study.sections.length} sections)`}
          </button>

          {isOpen && (
            <div className="mt-8 space-y-8">
              {study.sections.map((section, sectionIndex) => (
                <section key={section.heading}>
                  <h3 className="flex items-baseline gap-3 text-sec font-bold text-lg md:text-xl mb-2">
                    <span className="text-sec/70 text-sm tabular-nums">
                      {number}.{sectionIndex + 1}
                    </span>
                    {section.heading}
                  </h3>
                  <p className="text-sec/80 text-base leading-relaxed max-w-3xl">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          )}
        </div>
      </header>
    </article>
  );
}

export default function CaseStudiesPage() {
  return (
    <Curve>
      <SEO
        title="Case Studies | Mann Gupta — AI Product & Strategy"
        description="Engagement-style case studies covering AI product economics, pricing and packaging, market entry, and market microstructure. Problem, alternatives scored, recommendation, KPIs."
        url="https://gmannn.netlify.app/case-studies"
      />
      <div className="bg-main min-h-screen font-cabinetGrotesk">
        <Navbar />

        <main className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 pt-8 pb-24">
          <header className="max-w-4xl py-16 md:py-24">
            <p className="text-xs uppercase tracking-[0.3em] text-sec/70 mb-6">
              Case studies
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-sec leading-[1.05]">
              Written as engagements, not interview drills.
            </h1>
            <p className="text-sec/80 text-base md:text-lg mt-6 leading-relaxed">
              Each study carries a problem statement, the alternatives scored against each
              other, a financial or quantitative model, the recommendation, and the one
              assumption that would reverse it. Depth over count: a small number of finished
              analyses beats a hundred half ones.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <ButtonNew text="Experience" link="/#experience-section" hideArrow />
              {/* A real anchor, not ButtonNew: ButtonNew routes external links
                  through window.open, so it renders no href for crawlers and is
                  not keyboard-navigable as a link. */}
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sec border-b border-sec/40 hover:border-sec pb-1 text-lg transition-colors"
              >
                Read the write-ups on Medium
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </header>

          {publishedCaseStudies.length > 0 ? (
            <div>
              {publishedCaseStudies.map((study, index) => (
                <CaseStudy key={study.slug} study={study} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-sec/80 border-t border-sec/15 py-16">
              New studies are being written up. In the meantime, the shipped product
              decisions are documented in the experience timeline.
            </p>
          )}
        </main>

        <Footer />
      </div>
    </Curve>
  );
}
