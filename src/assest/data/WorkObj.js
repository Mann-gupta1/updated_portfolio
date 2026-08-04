import { projectScreenshots } from './projectScreenshots';

// Portfolio projects, ordered by how much they support the AI Product Manager
// positioning — NOT chronologically.
//
// The three Acceltancy products (LeadLine, the CRM, Wedily) lead because they are
// the only entries where the roadmap, the pricing, and the launch scope were all
// mine. They were previously absent from this page entirely, which meant /works
// listed five engineering projects and none of the products the rest of the site
// is built around.
//
// Field notes:
//   role                 -> the DECISION owned, not the layer built. A recruiter
//                           scanning for product ownership reads this line first.
//   impact               -> measured outcomes; rendered as its own block by
//                           pages/project/[id].jsx (was never populated before).
//   client               -> also rendered by the detail page, also unused before.
//   keyResponsibilities  -> the execution proof underneath the decision.
const worksObjRaw = [
  {
    slug: 'leadline-ai-messaging',
    title: 'LeadLine',
    time: 2025,
    Subtitle: 'AI Messaging Platform, 0 to 1',
    client: 'Acceltancy',
    bg: 'bg-[#0f766e]',
    Link: '#',
    github: '#',
    color: 'text-[#0f766e]',
    description:
      'An LLM agent that auto-replies to inbound leads and escalates to a human when confidence drops. I chose human-in-the-loop over full automation to protect brand voice on high-intent conversations, and priced the product in AI replies rather than tokens because vendors buy outcomes, not infrastructure.',
    techStack: ['LLM Agents', 'Human-in-the-Loop', 'Per-Reply Metering', 'WhatsApp Business API', 'Instagram API', 'Razorpay'],
    role: 'Owned the problem framing, the pricing model, the launch scope, and the implementation.',
    impact: [
      'Removed ~70% of manual reply volume',
      'First-response time cut from hours to seconds',
      'Three revenue lines priced and shipped',
      'Gross margin per account stays flat as usage grows',
    ],
    keyResponsibilities: [
      'Defined the confidence threshold and escalation path, rejecting full automation to protect brand voice',
      'Designed the AI unit economics: org-level keys, per-reply metering, bundled allowance, stackable top-up packs',
      'Rejected bring-your-own-key pricing after research showed the segment will not manage API credentials',
      'Shipped multi-brand routing so one deployment serves every brand with no per-brand engineering',
    ],
  },
  {
    slug: 'wedily-marketplace',
    title: 'Wedily',
    time: 2025,
    Subtitle: 'Four-Persona Consumer Marketplace',
    client: 'Acceltancy',
    bg: 'bg-[#be123c]',
    Link: '#',
    github: '#',
    color: 'text-[#be123c]',
    description:
      'A wedding marketplace serving couples, planners, vendors, and venues. The hard part was not building it, it was deciding what not to build: I cut v1 to a single wedge feature, WhatsApp invites and RSVP, chosen from how the segment actually communicates rather than from a feature matrix.',
    techStack: ['Product Strategy', 'Wedge Strategy', 'Pricing & Packaging', 'Next.js', 'PostgreSQL', 'SDXL'],
    role: 'Owned discovery across four personas, the v1 scope call, the pricing ladder, and delivery.',
    impact: [
      'Held a 60 to 90 day launch window',
      '7 features cut and a full planner SaaS surface deferred',
      'INR 2,499 consumer tier and INR 999/month vendor tier live',
      'Launch concentrated in one city on a supply-density thesis',
    ],
    keyResponsibilities: [
      'Ran discovery across couples, planners, vendors, and venues, then locked a scope that protected the launch date',
      'Picked WhatsApp invites and RSVP as the single non-negotiable wedge, and built the roadmap outward from it',
      'Priced a one-time consumer premium tier around culturally specific features (AI pre-wedding shoot, Panchang muhurat advisor, regional-language invites) as a moat over generic planning tools',
      'Kept a deferred-not-deleted policy: v2 features stayed modelled in the schema while hidden, so later launches needed no rewrite',
    ],
  },
  {
    slug: 'acceltancy-crm',
    title: 'Internal CRM',
    time: 2025,
    Subtitle: 'Pipeline & Role-Based Sales Platform',
    client: 'Acceltancy',
    bg: 'bg-[#4338ca]',
    Link: '#',
    github: '#',
    color: 'text-[#4338ca]',
    description:
      'Messy spreadsheet workflows turned into a product: pipeline-scoped role-based access for four roles, role-specific analytics, and target tracking. I prioritised a performance workstream only after users flagged slow list views, then measured the result rather than assuming it.',
    techStack: ['RBAC', 'Multi-Tenant Architecture', 'PostgreSQL', 'Caching', 'Analytics'],
    role: 'Translated spreadsheet workflows into a spec, then owned prioritisation and delivery.',
    impact: [
      '~8 hours per week of manual analyst reporting removed',
      'Dashboard and deal-list response times cut ~60%',
      'Four roles served: sales, presales, category manager, admin',
      'Two overlapping products consolidated into one',
    ],
    keyResponsibilities: [
      'Shipped pipeline-scoped role-based access with role-specific analytics dashboards and target tracking',
      'Prioritised a caching and background-revalidation workstream from user feedback, measured before and after',
      'Consolidated two overlapping products, retiring a separate deployment and its database with zero disruption to existing API consumers',
    ],
  },
  {
    slug: 'document-intelligence-system',
    title: 'Document Intelligence System',
    time: 2025,
    Subtitle: 'RAG Retrieval Platform',
    client: 'Freelance client',
    bg: 'bg-[#7c3aed]',
    Link: '#',
    github: '#',
    color: 'text-[#7c3aed]',
    description:
      'Semantic search over 1000+ page documents. Keyword search was already in place and failing, so rather than assume vectors would win I benchmarked hybrid retrieval against it on real queries before committing to the more expensive approach.',
    techStack: ['RAG', 'pgvector', 'Embeddings', 'Hybrid Search', 'PostgreSQL', 'Caching'],
    role: 'Framed the outcome as a measurable retrieval problem, then designed and shipped it.',
    impact: [
      '~40% better search relevance',
      '~35% lower query latency',
      'Sub-second semantic search at scale',
    ],
    keyResponsibilities: [
      'Benchmarked hybrid retrieval (vector similarity plus metadata filters) against keyword search before committing',
      'Designed semantic chunking with sliding-window overlap for 1000+ page documents',
      'Added pgvector indexing for sub-second lookups, then tuned cache and index for latency',
    ],
  },
  {
    slug: 'aegistrace',
    title: 'AegisTrace',
    time: 2025,
    Subtitle: 'LLM Evaluation & Observability',
    bg: 'bg-[#dc2626]',
    Link: 'https://aegistrace-pi.vercel.app/',
    github: '#',
    color: 'text-[#dc2626]',
    description:
      'The evaluation layer an AI product needs before anyone can trust it in production. Embedding-similarity scoring to catch hallucination and drift, plus searchable traces, because "is the AI working?" has to be a metric a PM can read, not a vibe.',
    techStack: ['LLM Evaluation', 'Embeddings', 'pgvector', 'Cosine Similarity', 'Tracing'],
    role: 'Defined what "working" means for an LLM feature, then built the measurement for it.',
    impact: [
      'Hallucination rate reduced ~35%',
      'Average debugging time cut ~60%',
      'Answer-grounding consistency monitored continuously',
    ],
    keyResponsibilities: [
      'Added embedding-based output evaluation so quality became a tracked number rather than an anecdote',
      'Instrumented telemetry and searchable traces for production debugging',
      'Built quality signals to monitor answer grounding over time',
    ],
  },
  {
    slug: 'workable-dag-engine',
    title: 'Workable DAG Engine',
    time: 2025,
    Subtitle: 'Multimodal Workflow Runtime',
    client: 'Freelance client',
    bg: 'bg-[#0d9488]',
    Link: '#',
    github: '#',
    color: 'text-[#0d9488]',
    description:
      'A workflow engine for multimodal jobs across text, image, and video. The client wanted faster turnaround and the obvious move was to pay for a faster model; I measured where wall-clock time actually went first, and parallelised instead.',
    techStack: ['Python', 'Distributed Workers', 'Queue Orchestration', 'Async Processing', 'Retry Logic'],
    role: 'Chose where to spend for speed, based on measurement rather than assumption.',
    impact: [
      '~40% lower end-to-end runtime',
      '100+ multimodal jobs per day',
      'No increase in per-job inference cost',
    ],
    keyResponsibilities: [
      'Measured the runtime breakdown before spending, then parallelised independent DAG stages',
      'Built fault-tolerant stateful execution with retry and recovery controls',
      'Added configurable concurrency and queue-based execution policies',
    ],
  },
  {
    slug: 'edunexus-multi-tenant-saas',
    title: 'EduNexus',
    time: 2025,
    Subtitle: 'Multi-Tenant Learning SaaS',
    client: 'Freelance client',
    bg: 'bg-[#2563eb]',
    Link: '#',
    github: '#',
    color: 'text-[#2563eb]',
    description:
      'Four personas wanted different things from one platform, and the people paying — parents — were the ones who would never log in. So I made WhatsApp the parent surface instead of building them a dashboard to ignore.',
    techStack: ['Multi-Tenant Architecture', 'RBAC', 'WebRTC', 'PostgreSQL', 'WhatsApp Integration'],
    role: 'Scoped tenant isolation as non-negotiable, then chose the buyer’s channel over a dashboard.',
    impact: [
      'Live classes at 50+ concurrent users per session',
      'Four personas served with strict tenant isolation',
      'Automated weekly and monthly parent reporting over WhatsApp',
    ],
    keyResponsibilities: [
      'Implemented secure tenant-scoped data access with zero cross-tenant bleed',
      'Shipped WebRTC live classes with fallback handling and auto-reconnection',
      'Integrated AI homework grading and student-specific feedback',
    ],
  },
  {
    slug: 'kubewise',
    title: 'KubeWise',
    time: 2025,
    Subtitle: 'Cloud Cost Analytics',
    bg: 'bg-[#ea580c]',
    Link: 'https://kubewise.vercel.app/',
    github: '#',
    color: 'text-[#ea580c]',
    description:
      'Raw cluster utilisation turned into right-sizing recommendations, with dashboards that made saturation and waste legible to people who do not read Kubernetes metrics for a living.',
    techStack: ['Kubernetes', 'AWS', 'Prometheus', 'Grafana', 'Cost Optimization'],
    role: 'Made infrastructure cost a decision non-infrastructure stakeholders could act on.',
    impact: [
      'Monthly cloud spend trimmed ~30%',
      'Saturation and eviction trends surfaced in real time',
    ],
    keyResponsibilities: [
      'Analysed cluster-level utilisation to generate right-sizing recommendations',
      'Wired Prometheus metrics into dashboards aimed at non-infrastructure readers',
    ],
  },
];

// Attach screenshots by slug: img = first image, galleryImages = all
const worksObj = worksObjRaw.map((p) => {
  const images = projectScreenshots[p.slug];
  return {
    ...p,
    img: images?.[0] ?? null,
    galleryImages: images && images.length ? images : null,
  };
});

export { worksObj };
export default worksObj;
