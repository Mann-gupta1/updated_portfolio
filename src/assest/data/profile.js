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

// The three role families this portfolio is aimed at, in priority order.
// Recruiters self-select: each track should read their own job description back
// at them within two seconds.
//
// Honesty rule: `proof` may only cite work actually done. No claim here goes
// beyond what is on the resume and defensible in an interview.
export const positioning = [
  {
    id: "ai-engineer",
    role: "AI / Backend Engineer",
    claim:
      "I ship production AI systems end to end, not demos that die in a notebook.",
    detail:
      "Built a production agentic LLM system with multi-step reasoning, tool calls into the CRM, and a confidence-gated guardrail that escalates to a human on low confidence. Also own a CRM backend at 40+ REST controllers, 100+ services, and 52 domain entities.",
    proof: [
      "70% of manual lead-response work removed by a production agentic LLM system",
      "Multi-agent DAG orchestration engine running 100+ multimodal jobs/day, runtime cut 40%",
      "Hybrid RAG retrieval over 1000+ page documents: +40% relevance, -35% latency",
    ],
  },
  {
    id: "fde",
    role: "Forward Deployed Engineer",
    claim:
      "I sit with the customer, scope the ambiguity, and take the prototype all the way to production.",
    detail:
      "Three client products delivered end to end, discovery through production: a RAG retrieval platform, a multi-agent workflow runtime, and a multi-tenant learning SaaS. Each one started as a business problem, not a spec.",
    proof: [
      "Three client products scoped with the customer and shipped to production",
      "LLM evaluation and observability built as a product surface (AegisTrace)",
      "On-call for 3 weeks at WorkIndia: 100+ live alerts solo, runbooks the team adopted",
    ],
  },
  {
    id: "ai-pm",
    role: "AI Product Manager",
    claim:
      "I write the spec, price the tier, model the AI cost per user, and ship it.",
    detail:
      "Owned an LLM agent from problem framing to pricing: confidence-gated auto-reply with human escalation, per-reply metering, and margin that stays flat as usage grows.",
    proof: [
      "Three revenue lines priced and shipped, denominated in AI replies not tokens",
      "Rejected bring-your-own-key pricing on adoption evidence, and documented why",
      "Cut 7 features and deferred a whole SaaS surface to hold a 60-90 day launch window",
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
