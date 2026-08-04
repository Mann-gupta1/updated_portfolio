// Single source of truth for identity, links, and role positioning.
// Change a link here and it updates the hero, socials, footer, and SEO at once.

// Everything that links to Medium reads this one constant, so one edit covers
// the hero button, the socials rail, and the case-studies page.
export const MEDIUM_URL = "https://medium.com/@guptamann";

export const links = {
  email: "manngupta923@gmail.com",
  phone: "+916266725150",
  linkedin: "https://www.linkedin.com/in/gupta-mann/",
  github: "https://github.com/Mann-gupta1",
  medium: MEDIUM_URL,
  x: "https://x.com/_guptamann_",
  whatsapp: "https://wa.me/916266725150",
  resume:
    "https://drive.google.com/file/d/1DjJ4okUG3J1l_Vl4p81bmwA8Ru_ThPnT/view",
};

// The three roles this portfolio is aimed at. Recruiters self-select: each one
// should read their own job description back at them within two seconds.
//
// Honesty rule: `proof` may only cite work actually done. The HFT track cites
// latency/cost modelling, competitive-programming rank, and a microstructure
// case study — it does NOT claim trading-desk experience. Claiming a desk you
// have not sat on is the fastest way to fail a Citadel or Jane Street screen.
export const positioning = [
  {
    id: "ai-pm",
    role: "AI Product Manager",
    claim:
      "I write the spec, price the tier, model the AI cost per user, and ship it.",
    detail:
      "Owned an LLM agent from problem framing to pricing: confidence-gated auto-reply with human escalation, per-reply metering, and margin that stays flat as usage grows.",
    proof: [
      "70% of manual lead-response work removed by a human-in-the-loop LLM agent",
      "Three revenue lines priced and shipped, denominated in AI replies not tokens",
      "LLM evaluation and observability built as a product surface (AegisTrace)",
    ],
  },
  {
    id: "hft-pm",
    role: "Product Manager — HFT / Quant",
    claim:
      "Latency, cost, and edge decay are product constraints, and I model them before committing spend.",
    detail:
      "The instinct that transfers: measure where the time and money actually go before buying a faster anything. Cut runtime 40% by parallelising rather than upgrading model tier; cut infra spend 50-70% by auditing line by line.",
    proof: [
      "Top 4.35% on LeetCode globally, max rating 1976 — algorithms under time pressure",
      "40% runtime cut chosen over a model upgrade, after measuring where latency lived",
      "Market-microstructure case study: spread capture vs adverse selection, edge decay vs latency budget",
    ],
  },
  {
    id: "consulting",
    role: "Strategy & Management Consulting",
    claim:
      "Structured problem solving with a number attached, and a named rejected alternative.",
    detail:
      "Every product call on this site is written as an engagement: problem, the alternatives scored, the recommendation, and the one assumption that would reverse it.",
    proof: [
      "Bottom-up market sizing, three-scenario P&L, and CAC/payback modelling",
      "Rejected the highest-margin pricing option on adoption evidence, and documented why",
      "Executive-summary-first writing: the call, the two numbers behind it, the reversing assumption",
    ],
  },
];

// Headline metrics. Keep this list SHORT — five numbers people remember beat
// fifteen they skim. Every entry must be defensible in an interview.
export const headlineMetrics = [
  { value: "70%", label: "Company spend cut", context: "as budget owner at Acceltancy" },
  { value: "70%", label: "Manual replies removed", context: "human-in-the-loop LLM agent" },
  { value: "3", label: "Products owned 0→1", context: "AI messaging, CRM, marketplace" },
  { value: "4.35%", label: "Top on LeetCode", context: "globally, max rating 1976" },
];
