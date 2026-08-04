// Experience data, framed product-first.
//
// Positioning: this portfolio targets AI Product Manager, Product Manager (HFT /
// quant trading), and strategy consulting. Recruiters for those roles scan for
// DECISIONS and MEASURED OUTCOMES, not task lists. So every entry carries:
//
//   caseStudy: { problem, decision, result }  <- the 6-second read
//   roles:     [...]                          <- the engineering proof underneath
//
// Keep `caseStudy.decision` a real judgement call with a rejected alternative.
// "Built X" is not a decision. "Chose X over Y because Z" is.
export const paragraphData = [
  {
    companyName: "Acceltancy",
    role: "Founding Product Owner & Engineer",
    color: "#D4F534",
    date: "Aug 2025 – Present",
    shortDesc:
      "Owned roadmap, pricing, and launch scope for three products; cut company spend 70% and removed 70% of manual lead-response work.",
    desc: "Founding team member owning discovery, scope, pricing, and delivery across three products: an AI messaging platform (LeadLine), an internal CRM, and a four-persona consumer marketplace (Wedily).",
    caseStudy: {
      problem:
        "A seed-stage team was burning cash on idle infrastructure while inbound leads waited hours for a human reply, and three products competed for one roadmap.",
      decision:
        "Audited spend line by line, chose a confidence-gated LLM agent with human escalation over full automation to protect brand voice, and cut each product to a single wedge feature. Rejected bring-your-own-key pricing after research showed the segment will not manage API credentials.",
      result:
        "70% lower cloud and vendor spend, 70% of manual reply volume removed, first response cut from hours to seconds, and a 60–90 day launch window held.",
    },
    metrics: [
      { value: "70%", label: "Company spend cut" },
      { value: "70%", label: "Manual replies removed" },
      { value: "3", label: "Revenue lines priced" },
    ],
    roles: [
      "Defined and shipped an LLM agent that auto-replies to inbound leads with human escalation on low confidence.",
      "Designed the AI unit economics: per-reply metering, bundled monthly allowance, and stackable top-up packs, so margin per account stays flat as usage grows.",
      "Priced three revenue lines that shipped: INR 2,499 one-time consumer tier, INR 999/month vendor subscription, and metered AI top-up packs.",
      "Locked a v1 scope across four personas that deferred an entire SaaS surface and cut 7 features to hold the launch window.",
      "Cut company cloud and vendor spend 70% as budget owner, then held the new baseline.",
    ],
  },
  {
    companyName: "Workable",
    role: "Product Owner & Engineer (Freelance)",
    color: "#8B5CF6",
    date: "Aug 2025 – Present",
    shortDesc:
      "Multimodal DAG execution engine at 100+ jobs/day; prioritised parallelism over a faster model to cut runtime 40%.",
    desc: "Spearheaded design and delivery of a DAG execution engine for multimodal tasks (text, image, video), handling 100+ jobs/day with persistent state management, retry logic, and fault-tolerant execution on distributed workers.",
    caseStudy: {
      problem:
        "The client bought an outcome — faster turnaround on multimodal jobs — not a spec, and the obvious fix was to pay for a faster model.",
      decision:
        "Measured where wall-clock time actually went before spending, then parallelised independent DAG stages instead of upgrading the model tier.",
      result:
        "~40% lower end-to-end runtime at 100+ jobs/day, with no increase in per-job inference cost.",
    },
    metrics: [
      { value: "100+", label: "Jobs per day" },
      { value: "40%", label: "Runtime cut" },
    ],
    roles: [
      "Spearheaded design and delivery of a DAG execution engine for multimodal workflows.",
      "Processed 100+ jobs/day with persistent state, retries, and distributed worker execution.",
      "Reduced end-to-end runtime by ~40% by parallelizing independent DAG stages.",
      "Built queue-based orchestration with configurable concurrency controls.",
    ],
  },
  {
    companyName: "EduNexus",
    role: "Product Owner & Engineer (Freelance)",
    color: "#10B981",
    date: "Aug 2025 – Present",
    shortDesc:
      "Multi-tenant learning SaaS for 4 personas with live classes, AI grading, and an automated parent reporting loop.",
    desc: "Built a multi-tenant SaaS platform with role-based access control for students, teachers, admins, and parents. Added live classes, AI homework evaluation, and automated multi-channel report delivery.",
    caseStudy: {
      problem:
        "Four personas — students, teachers, admins, parents — wanted different things from one platform, and parents were the ones paying without ever logging in.",
      decision:
        "Scoped strict tenant isolation first as a non-negotiable, then chose WhatsApp as the parent surface rather than building them a dashboard they would never open.",
      result:
        "Live classes at 50+ concurrent users per session, AI-graded homework, and a weekly/monthly reporting loop that reaches the buyer where they already are.",
    },
    metrics: [
      { value: "4", label: "User personas" },
      { value: "50+", label: "Concurrent live users" },
    ],
    roles: [
      "Implemented strict tenant-level data isolation and authorization policies.",
      "Shipped WebRTC live classes with fallback handling and auto-reconnection.",
      "Integrated AI-powered homework evaluation and student feedback workflows.",
      "Built weekly and monthly reporting across WhatsApp and in-platform channels.",
    ],
  },
  {
    companyName: "Document Intelligence",
    role: "Product Owner & Engineer (Freelance)",
    color: "#F59E0B",
    date: "Aug 2025 – Present",
    shortDesc:
      "Hybrid retrieval over 1000+ page PDFs, chosen over keyword search after measuring a 40% relevance gain.",
    desc: "Architected ingestion for large PDFs using semantic chunking and async parallel indexing. Implemented vector indexing with pgvector and hybrid retrieval for faster, higher-quality search.",
    caseStudy: {
      problem:
        "Search over 1000+ page documents returned technically-matching but useless results, and the cheap fix (keyword search) was already in place and failing.",
      decision:
        "Benchmarked hybrid retrieval (vector similarity plus metadata filters) against keyword search on real queries before committing, rather than assuming vectors would win.",
      result:
        "~40% better relevance and ~35% lower query latency, with sub-second semantic search at scale.",
    },
    metrics: [
      { value: "40%", label: "Relevance gain" },
      { value: "35%", label: "Latency cut" },
    ],
    roles: [
      "Built semantic chunking with sliding-window overlap for 1000+ page documents.",
      "Integrated pgvector indexing for sub-second semantic search at scale.",
      "Implemented hybrid search with metadata filters for ~40% better relevance.",
      "Reduced query latency by ~35% with caching and index optimization.",
    ],
  },
  {
    companyName: "WorkIndia",
    role: "Software Engineer Intern",
    color: "#3B82F6",
    date: "Feb 2025 – Jul 2025",
    shortDesc:
      "Migrated 15+ microservices on EKS with zero downtime and cut cloud spend ~50% via autoscaling.",
    desc: "Led EKS migration and cluster optimization across production services. Improved observability, handled on-call operations, and automated repetitive operational workflows.",
    caseStudy: {
      problem:
        "Cloud spend was growing faster than traffic, and users were finding incidents before monitoring did.",
      decision:
        "Built the utilisation analysis and presented right-sizing to the engineering lead, then shipped monitoring before the cluster migration rather than after it.",
      result:
        "~50% lower monthly cloud spend, 3x faster incident triage, and a zero-downtime migration of 15+ microservices.",
    },
    metrics: [
      { value: "50%", label: "Cloud spend cut" },
      { value: "15+", label: "Services migrated" },
      { value: "3x", label: "Faster triage" },
    ],
    roles: [
      "Led migration of an Amazon EKS cluster serving 15+ microservices without downtime.",
      "Drove Kubernetes HPA and VPA autoscaling to reduce monthly cloud spend by ~50%.",
      "Set up request monitoring for 10+ services with Grafana and StatsD.",
      "Resolved 100+ production alerts during a 3-week on-call rotation.",
    ],
  },
  {
    companyName: "ITC Infotech",
    role: "AI Engineer Intern",
    color: "#14B8A6",
    date: "Sep 2024 – Nov 2024",
    shortDesc:
      "Enterprise LLM chatbots for HR and support; fixed retrieval instead of the prompt to lift accuracy ~25%.",
    desc: "Engineered end-to-end LLM-powered chatbot systems for HR and customer support use cases, including retrieval enhancement and production bug fixes.",
    caseStudy: {
      problem:
        "Enterprise HR and support chatbots answered fluently but wrongly on domain-specific questions.",
      decision:
        "Traced the failures to retrieval rather than the model, and fixed intent classification and embedding-based retrieval instead of scaling the prompt.",
      result:
        "~25% higher response accuracy on the same underlying model.",
    },
    metrics: [
      { value: "25%", label: "Accuracy lift" },
      { value: "10+", label: "Prod bugs fixed" },
    ],
    roles: [
      "Built chatbot systems for enterprise HR and customer support workflows.",
      "Improved response accuracy by ~25% through prompt engineering and intent classification.",
      "Integrated vector-based search to improve domain-specific answer relevance.",
      "Diagnosed and fixed 10+ production bugs in workflows and API integrations.",
    ],
  },
  {
    companyName: "GushWork",
    role: "Software Engineer Intern",
    color: "#F59E0B",
    date: "Jun 2024 – Aug 2024",
    shortDesc:
      "Reworked NLP ranking logic in a job-candidate matching engine for 15% better keyword precision.",
    desc: "Created a relevance-scoring engine for job-candidate matching and fixed deep server-side defects across data and API layers.",
    caseStudy: {
      problem:
        "A job-candidate matching engine surfaced plausible-looking matches that recruiters kept rejecting.",
      decision:
        "Reworked the core NLP ranking logic rather than adding filters on top of a weak relevance signal.",
      result:
        "15% better keyword precision, plus 15+ deep server-side defects cleared from the data and API layers.",
    },
    metrics: [
      { value: "15%", label: "Precision gain" },
    ],
    roles: [
      "Built NLP-based ranking logic that improved keyword precision by 15%.",
      "Fixed 15+ deep server-side defects in data processing and API services.",
    ],
  },
];
