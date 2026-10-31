"use client";

import Navbar from "@/componet/Navbar";
import Footer from "@/componet/Footer/Footer";
import Curve from "@/componet/UI/NavCurve";
import SEO from "@/componet/SEO/Seo";
import ButtonNew from "@/componet/UI/ButtonNew";
import { links } from "@/assest/data/profile";

// Freelance offer page. Prices are starting points, quoted in USD because most
// clients are international. Edit the arrays below; nothing else needs touching.
const services = [
  {
    title: "AI SaaS MVP",
    price: "from $1,500",
    time: "3-6 weeks",
    detail:
      "Next.js + Supabase/Postgres + LLM APIs, auth, billing, deployed. Scoped to one workflow that makes money.",
  },
  {
    title: "AI agent / automation",
    price: "from $400",
    time: "1-2 weeks",
    detail:
      "Lead replies, support triage, document Q&A (RAG), with a confidence guardrail that hands off to a human.",
  },
  {
    title: "Marketing / client website",
    price: "from $300",
    time: "1-2 weeks",
    detail:
      "Fast, animated, SEO-ready React or Next.js site with a CMS or contact flow. Mobile first.",
  },
  {
    title: "Monthly retainer",
    price: "from $400 / month",
    time: "ongoing",
    detail:
      "Fixes, features, and on-call for an existing product. Weekly update, no lock-in.",
  },
];

const proof = [
  "Founding engineer: shipped 3 production products solo or near-solo",
  "LLM agent that removed ~70% of manual reply volume",
  "US clients, delivered async across a 10-hour time gap",
  "Wedily: 7 apps, 64+ routes, live payments, built end to end",
];

const process = [
  "Free 20-minute call. I tell you plainly if I am the wrong fit.",
  "Fixed scope and price in writing. 50% upfront, rest on delivery.",
  "Weekly demo link, so you see progress and not promises.",
  "Handover: code, docs, and 14 days of free bug fixes.",
];

function Hire() {
  return (
    <Curve>
      <SEO
        title="Hire Mann Gupta | AI & Full-Stack Freelancer"
        description="Freelance AI engineer and full-stack developer. AI SaaS MVPs, LLM agents, and fast Next.js websites. Fixed scope, weekly demos, US-hours overlap."
        url="https://gmannn.netlify.app/hire/"
        keywords="hire AI developer, freelance Next.js developer, Supabase developer, LLM agent developer, AI SaaS MVP, Mann Gupta"
      />
      <div className="bg-main text-sec font-cabinetGrotesk min-h-screen flex flex-col">
        <Navbar />
        <main className="max-w-[1100px] w-full mx-auto px-4 md:px-8 pt-16 pb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-sec/70 mb-6">
            Open for freelance work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            I build AI products and fast websites that earn their keep.
          </h1>
          <p className="text-lg md:text-xl text-sec/80 mt-6 max-w-2xl">
            One engineer, end to end: scope, build, deploy. No agency layers, no
            surprise invoices.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonNew
              text="Book a free call"
              link={links.whatsapp}
              hideArrow
              className="!bg-thr !text-black hover:!bg-thr/90"
            />
            <ButtonNew
              text="Email me"
              link={`mailto:${links.email}`}
              hideArrow
              className="!bg-black !text-white hover:!bg-black/90"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-20 mb-8">What I do</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none">
            {services.map((s) => (
              <li key={s.title} className="border border-sec/15 rounded-2xl p-6">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-sec/80 mt-3">{s.detail}</p>
                <p className="mt-4 text-sm tabular-nums">
                  <span className="font-bold">{s.price}</span>
                  <span className="text-sec/70"> · {s.time}</span>
                </p>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-20 mb-8">Proof</h2>
          <ul className="space-y-3 list-none max-w-3xl">
            {proof.map((p) => (
              <li key={p} className="flex gap-4 items-baseline">
                <span
                  className="h-1.5 w-1.5 rounded-full shrink-0 translate-y-2"
                  style={{ backgroundColor: "#D4F534" }}
                  aria-hidden="true"
                />
                <span className="text-lg text-sec/90">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonNew text="See case studies" link="/case-studies" hideArrow />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-20 mb-8">How we work</h2>
          <ol className="space-y-3 list-decimal pl-6 max-w-3xl text-lg text-sec/90">
            {process.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </main>
        <Footer />
      </div>
    </Curve>
  );
}

export default Hire;
