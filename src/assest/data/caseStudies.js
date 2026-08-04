// Case studies — the differentiator for AI PM, HFT product, and consulting roles.
//
// ============================ HOW THIS FILE WORKS ============================
//
// Every study has `status`. ONLY `status: "published"` renders on the site.
// Drafts are invisible to visitors, so a half-finished analysis can never ship.
//
//   status: "published"  -> live on /case-studies
//   status: "draft"      -> hidden; scaffold for you to fill
//
// The two flagship studies below (mckinsey-ai-saas-india, hft-options-market-making)
// are DRAFTS ON PURPOSE. They are the scaffold and the standard, not finished work.
// Every `TODO:` is a number or claim only you can supply. Fabricated market data
// on a public portfolio is worse than an empty section: a McKinsey or Citadel
// interviewer will ask you to walk the model, and you have to be able to.
//
// Rules for filling these in:
//   1. Bottom-up sizing beats top-down. Show the arithmetic, not just the total.
//   2. Name the alternative you REJECTED and why. A recommendation with no
//      rejected option reads as a preference, not analysis.
//   3. State the ONE assumption that would reverse your call. This is the single
//      strongest signal of real consulting thinking on the whole page.
//   4. Depth over count. 10 finished studies beat 100 half ones. Never write
//      "solved 100 cases" anywhere.
//
// ============================================================================

export const CASE_STUDY_STATUS = {
  PUBLISHED: "published",
  DRAFT: "draft",
};

export const caseStudies = [
  // ===========================================================================
  // FLAGSHIP 1 — the hardest strategy case. Consulting recruiters read this one.
  // ===========================================================================
  {
    slug: "mckinsey-ai-saas-india",
    status: CASE_STUDY_STATUS.DRAFT,
    flagship: true,
    difficulty: "McKinsey-level",
    track: "Strategy / Market Entry",
    accent: "#D4F534",
    title: "TODO: Market entry call for a US AI SaaS vendor in India",
    question:
      "TODO: State the client question in one sentence, the way a partner would ask it. e.g. 'Should we enter India direct, via channel partners, or not at all?'",
    duration: "TODO: e.g. 3 weeks, self-directed",
    frameworks: ["TAM/SAM/SOM", "Porter's Five Forces", "Scenario P&L", "CAC/LTV"],
    executiveSummary:
      "TODO: The call, the two numbers it rests on, and the one assumption that would reverse it. Three sentences maximum. Write this LAST but put it FIRST.",
    sections: [
      {
        heading: "Problem statement",
        body: "TODO: What decision was on the table, who owned it, and what happens if they get it wrong. Include the constraint that made this hard (regulatory, cost-to-serve, incumbent lock-in).",
      },
      {
        heading: "Market analysis",
        body: "TODO: Bottom-up sizing. Show the chain: number of target accounts x realistic attach rate x price = SAM. Then SOM for a 3-year horizon. State every input's source. A reviewer will attack the weakest input, so name it yourself.",
      },
      {
        heading: "Customer segmentation",
        body: "TODO: 3-4 segments, each with willingness to pay, cost to serve, and speed to close. Say which segment you would NOT chase and why — that is the harder half of segmentation.",
      },
      {
        heading: "Financial analysis",
        body: "TODO: Three-scenario P&L (base / upside / downside). Must include CAC, gross margin, inference or COGS per account, and payback period in months. If AI inference cost per account is material, model it explicitly — most candidates skip this and it is your edge.",
      },
      {
        heading: "Strategic alternatives",
        body: "TODO: Score 3 options against the same criteria (speed, capital at risk, margin, defensibility). One of them should be 'do nothing' or 'delay'. Show the scoring, not just the winner.",
      },
      {
        heading: "Recommendation",
        body: "TODO: One option, stated as an imperative. Then the two numbers that justify it, then the strongest argument against it and your answer to that argument.",
      },
      {
        heading: "Implementation roadmap",
        body: "TODO: 0-3, 3-9, 9-18 month phases. Each phase needs an owner, a gate condition, and what triggers a stop.",
      },
      {
        heading: "Risks and mitigations",
        body: "TODO: 3-4 risks with likelihood, impact, and a specific mitigation. Include the one that could kill the whole thesis.",
      },
      {
        heading: "KPIs",
        body: "TODO: 4-6 metrics with target values and a review cadence. Separate leading indicators from lagging ones.",
      },
    ],
    metrics: [
      { value: "TODO", label: "SAM sized" },
      { value: "TODO", label: "Payback period" },
      { value: "TODO", label: "Scenarios modelled" },
    ],
  },

  // ===========================================================================
  // FLAGSHIP 2 — the hardest quant case. HFT / trading-firm PM recruiters read this.
  // Note: HFT firms screen hard for whether you actually understand microstructure
  // or are pattern-matching buzzwords. Every term below must be one you can define
  // cold and defend: adverse selection, queue position, tick-to-trade, edge decay.
  // ===========================================================================
  {
    slug: "hft-options-market-making",
    status: CASE_STUDY_STATUS.DRAFT,
    flagship: true,
    difficulty: "HFT-level",
    track: "Quant / Market Microstructure",
    accent: "#8B5CF6",
    title: "TODO: Go/no-go on a colocated market-making strategy",
    question:
      "TODO: State the question precisely, including instrument and venue. e.g. 'Is a colocated market-making strategy in NSE index options worth the fixed cost at our capital base?'",
    duration: "TODO: e.g. 2 weeks, self-directed",
    frameworks: [
      "Spread capture vs adverse selection",
      "Inventory risk",
      "Latency budget / edge decay",
      "Fixed-cost breakeven",
    ],
    executiveSummary:
      "TODO: Go or no-go, the binding constraint that drives it, and the latency threshold beyond which the edge disappears. Three sentences maximum.",
    sections: [
      {
        heading: "Problem statement",
        body: "TODO: The capital, the venue, the instrument, and the fixed cost being committed. Why this is a genuine decision and not an obvious yes.",
      },
      {
        heading: "Market microstructure",
        body: "TODO: Quoted spread, effective spread, tick size, typical queue depth, and who else is quoting. Define the fill mechanics: price-time priority, pro-rata, or hybrid — this changes the whole model.",
      },
      {
        heading: "Revenue model: spread capture",
        body: "TODO: Expected spread capture per round trip x expected round trips per day. State fill probability as a function of queue position, not as a constant. This is where most analyses quietly cheat.",
      },
      {
        heading: "Cost model: adverse selection and inventory",
        body: "TODO: What you lose to informed flow. Model adverse selection as a haircut on captured spread, and inventory risk as a function of position half-life and underlying volatility. If you skip this, the strategy always looks profitable and the analysis is worthless.",
      },
      {
        heading: "Latency budget and edge decay",
        body: "TODO: Map tick-to-trade budget across the path (feed handler, decision, order gateway, exchange). Then show how expected edge decays as latency rises. Identify the threshold where edge halves — that number is the whole case.",
      },
      {
        heading: "Fixed-cost breakeven",
        body: "TODO: Colocation, market data, exchange membership, hardware refresh. Compute daily P&L required to break even, then compare against modelled daily P&L with a confidence band.",
      },
      {
        heading: "Alternatives considered",
        body: "TODO: Score against at least two alternatives, e.g. non-colocated liquidity provision, or paying for flow instead of quoting. Include 'do not enter' as a scored option.",
      },
      {
        heading: "Recommendation",
        body: "TODO: Go or no-go, with the binding constraint named explicitly. State what would have to change to flip the call.",
      },
      {
        heading: "Risks",
        body: "TODO: Regulatory (SEBI/exchange rule change), technology (feed gaps, gateway failure), competitive (a faster participant arrives), and model risk (volatility regime shift).",
      },
      {
        heading: "KPIs",
        body: "TODO: Fill ratio, adverse selection cost per lot, realised vs modelled spread capture, inventory half-life, Sharpe. Include the kill-switch threshold.",
      },
    ],
    metrics: [
      { value: "TODO", label: "Latency threshold" },
      { value: "TODO", label: "Breakeven daily P&L" },
      { value: "TODO", label: "Modelled Sharpe" },
    ],
  },

  // ===========================================================================
  // SHIPPED PRODUCT CASE STUDIES — these are real, drawn from Acceltancy work,
  // so they publish immediately. They carry the page until the flagships land.
  // ===========================================================================
  {
    slug: "leadline-ai-agent-economics",
    status: CASE_STUDY_STATUS.PUBLISHED,
    flagship: false,
    difficulty: "Shipped product",
    track: "AI Product / Unit Economics",
    accent: "#10B981",
    title: "Pricing an LLM agent so margin does not scale with usage",
    question:
      "How do you price an AI messaging product when every reply costs real inference money and the buyer is a small vendor who will not manage API keys?",
    duration: "Acceltancy, 2025",
    frameworks: ["Unit economics", "Packaging ladder", "Willingness-to-pay research"],
    executiveSummary:
      "Priced the offer in AI replies rather than tokens, metered per reply against a bundled monthly allowance with stackable top-ups, and rejected bring-your-own-key. Gross margin per account now stays flat as usage grows instead of eroding, and the pricing unit matches what the buyer thinks they are buying.",
    sections: [
      {
        heading: "Problem statement",
        body: "An LLM agent that auto-replies to inbound leads has a real marginal cost per reply. Flat-rate pricing means the heaviest users destroy margin; pure usage pricing means buyers cannot predict their bill and churn on the first surprise invoice.",
      },
      {
        heading: "Customer segmentation",
        body: "The paying segment is small vendors and service businesses, not engineering teams. They buy outcomes (a reply that lands), have low tolerance for setup work, and will not create or rotate an API credential.",
      },
      {
        heading: "Strategic alternatives",
        body: "Three options: (1) bring-your-own-key, pushing inference cost to the customer; (2) flat unlimited, simple but margin-negative on heavy accounts; (3) bundled allowance plus metered top-ups. BYOK scored highest on margin and lowest on adoption.",
      },
      {
        heading: "Recommendation",
        body: "Bundled allowance plus stackable top-up packs, denominated in AI replies. Rejected BYOK explicitly: research showed the segment will not manage credentials, so the theoretically-best-margin option had the worst realistic adoption.",
      },
      {
        heading: "Implementation",
        body: "Org-level LLM keys, per-reply metering, a free-trial allowance to prove value before payment, and a vendor ladder: free listing, INR 999/month Pro with 200 AI replies, INR 199 top-up packs, plus a high-volume add-on.",
      },
      {
        heading: "Result",
        body: "Three revenue lines shipped. First-response time fell from hours to seconds and roughly 70% of manual reply volume was removed, while margin per account stayed predictable rather than scaling with usage.",
      },
      {
        heading: "KPIs",
        body: "Gross margin per account, replies per account per month, allowance utilisation rate, top-up attach rate, and escalation rate to a human (the quality guardrail).",
      },
    ],
    metrics: [
      { value: "70%", label: "Manual replies removed" },
      { value: "3", label: "Revenue lines shipped" },
      { value: "Hours→sec", label: "First response" },
    ],
  },
  {
    slug: "wedily-scope-and-wedge",
    status: CASE_STUDY_STATUS.PUBLISHED,
    flagship: false,
    difficulty: "Shipped product",
    track: "Product Strategy / Scope",
    accent: "#F59E0B",
    title: "Cutting a four-persona marketplace down to one wedge feature",
    question:
      "With couples, planners, vendors, and venues all wanting different things, what is the smallest v1 that still creates a marketplace?",
    duration: "Acceltancy, 2025",
    frameworks: ["Wedge strategy", "Supply density thesis", "Scope deferral"],
    executiveSummary:
      "Picked WhatsApp invites and RSVP as the single non-negotiable wedge from how the segment actually communicates, deferred an entire planner SaaS surface, cut 7 lower-leverage features, and concentrated launch in one city on a supply-density thesis. The 60–90 day launch window held.",
    sections: [
      {
        heading: "Problem statement",
        body: "A four-sided marketplace has four different definitions of value and no way to launch all of them at once. Building for all four in v1 guarantees missing the launch window; building for one risks a marketplace with no liquidity.",
      },
      {
        heading: "Customer segmentation",
        body: "Discovery across couples, planners, vendors, and venues. Couples are the demand trigger, vendors are the payers, planners are high-touch but low-volume, venues are slow-moving supply.",
      },
      {
        heading: "Strategic alternatives",
        body: "Breadth (thin coverage across multiple cities and all four personas) versus depth (one city, one wedge feature, dense vendor supply). Breadth optimises for a bigger addressable story; depth optimises for actual conversion.",
      },
      {
        heading: "Recommendation",
        body: "Depth. WhatsApp invites and RSVP as the wedge because that is where the segment already communicates, roadmap built outward from it (guest management, budget tracking, shareable itinerary, vendor shortlist), and launch concentrated in one city. Other cities marked upcoming rather than half-launched.",
      },
      {
        heading: "Implementation roadmap",
        body: "Ran launch readiness as a tracked blocker list — payments, messaging API, marketplace supply seeding, domains, vendor media, credential rotation — sequencing genuine blockers ahead of everything that could ship post-launch. Kept a deferred-not-deleted policy: v2 features stayed modelled in the schema while hidden from the surface, so later launches needed no rewrite.",
      },
      {
        heading: "Result",
        body: "A v1 scope that deferred an entire SaaS surface and cut 7 features, shipped inside the 60–90 day window, with a one-time INR 2,499 consumer tier and an INR 999/month vendor subscription both live.",
      },
      {
        heading: "Risks",
        body: "Single-city concentration caps early growth and makes the launch dependent on one supply pool. Mitigated by treating vendor supply density as the gate condition for opening city two.",
      },
      {
        heading: "KPIs",
        body: "Vendor supply density per category, invite-to-RSVP conversion, consumer tier attach rate, and time-to-first-vendor-response.",
      },
    ],
    metrics: [
      { value: "7", label: "Features cut for scope" },
      { value: "60–90d", label: "Launch window held" },
      { value: "4", label: "Personas researched" },
    ],
  },
];

/** Only published studies are ever rendered. Drafts stay private by construction. */
export const publishedCaseStudies = caseStudies.filter(
  (study) => study.status === CASE_STUDY_STATUS.PUBLISHED
);

/** Flagship drafts still awaiting real numbers — surfaced in dev warnings only. */
export const draftCaseStudies = caseStudies.filter(
  (study) => study.status === CASE_STUDY_STATUS.DRAFT
);
