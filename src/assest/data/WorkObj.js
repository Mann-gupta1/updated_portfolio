import { projectScreenshots } from './projectScreenshots';

const worksObjRaw = [
  {
    slug: 'workable-dag-engine',
    title: 'Workable DAG Engine',
    time: 2025,
    Subtitle: 'Distributed Multimodal Workflow Orchestrator',
    bg: 'bg-[#0f766e]',
    Link: '#',
    color: 'text-[#0f766e]',
    description: 'Designed and shipped a DAG execution engine for multimodal tasks across text, image, and video pipelines. The system runs 100+ jobs/day with persistent state, retries, and resilient distributed execution.',
    techStack: ['Python', 'Distributed Workers', 'Queue Orchestration', 'Async Processing', 'Retry Logic'],
    role: 'Owned architecture and implementation of the workflow engine and scheduler.',
    keyResponsibilities: [
      'Built fault-tolerant stateful DAG execution with retry and recovery controls',
      'Parallelized independent stages to reduce runtime by ~40%',
      'Added configurable concurrency and queue-based execution policies',
      'Designed resilient execution flow for production workload stability'
    ]
  },
  {
    slug: 'edunexus-multi-tenant-saas',
    title: 'EduNexus',
    time: 2025,
    Subtitle: 'Real-time Multi-tenant EdTech SaaS',
    bg: 'bg-[#2563eb]',
    Link: '#',
    color: 'text-[#2563eb]',
    description: 'Architected a multi-tenant SaaS platform with strict tenant isolation and RBAC across students, teachers, admins, and parents. Included real-time classes, AI homework evaluation, and automated reporting.',
    techStack: ['Node.js', 'PostgreSQL', 'RBAC', 'WebRTC', 'Real-time Systems', 'WhatsApp Integration'],
    role: 'Led multi-tenant architecture, authorization model, and real-time collaboration features.',
    keyResponsibilities: [
      'Implemented secure tenant-scoped data access with zero cross-tenant bleed',
      'Shipped live class streaming for 50+ concurrent users/session',
      'Integrated AI-powered homework grading and student-specific feedback',
      'Built weekly and monthly report generation across channels'
    ]
  },
  {
    slug: 'document-intelligence-system',
    title: 'Document Intelligence System',
    time: 2025,
    Subtitle: 'High-throughput RAG & Hybrid Search',
    bg: 'bg-[#7c3aed]',
    Link: '#',
    color: 'text-[#7c3aed]',
    description: 'Built a document intelligence platform for 1000+ page PDFs with semantic chunking, vector indexing, and hybrid retrieval. Improved search relevance and reduced response latency under concurrent load.',
    techStack: ['Python', 'PostgreSQL', 'pgvector', 'Embeddings', 'Hybrid Search', 'Caching'],
    role: 'Designed ingestion, retrieval, and indexing architecture for production-scale documents.',
    keyResponsibilities: [
      'Designed semantic chunking with sliding-window overlap',
      'Added pgvector-based indexing for sub-second semantic lookups',
      'Implemented hybrid search for ~40% relevance lift',
      'Reduced query latency by ~35% with cache and index tuning'
    ]
  },
  {
    slug: 'aegistrace',
    title: 'AegisTrace',
    time: 2025,
    Subtitle: 'LLM Observability Platform',
    bg: 'bg-[#dc2626]',
    Link: '#',
    color: 'text-[#dc2626]',
    description: 'Built an observability system for LLM outputs using embedding-based evaluation and similarity scoring to detect drift and hallucination behavior in real-time.',
    techStack: ['Python', 'pgvector', 'Embeddings', 'Cosine Similarity', 'Observability'],
    role: 'Implemented evaluation, tracing, and debugging instrumentation for LLM systems.',
    keyResponsibilities: [
      'Added embedding-based output evaluation to reduce hallucination rate by ~35%',
      'Instrumented telemetry and traces for production debugging',
      'Cut average debugging time by ~60% using searchable traces',
      'Built quality signals to monitor answer grounding consistency'
    ]
  },
  {
    slug: 'kubewise',
    title: 'KubeWise',
    time: 2025,
    Subtitle: 'Kubernetes Resource Analytics',
    bg: 'bg-[#ea580c]',
    Link: '#',
    color: 'text-[#ea580c]',
    description: 'Developed a Kubernetes analytics system that tracks utilization and recommends resource rightsizing for cost and performance optimization.',
    techStack: ['Kubernetes', 'AWS', 'Prometheus', 'Grafana', 'Cost Optimization'],
    role: 'Built analytics workflows and observability dashboards for cluster operators.',
    keyResponsibilities: [
      'Analyzed cluster-level utilization to generate right-sizing recommendations',
      'Reduced monthly AWS expenditure by ~30% with optimization insights',
      'Wired Prometheus metrics into custom operational dashboards',
      'Exposed real-time saturation and pod eviction trends for proactive response'
    ]
  }
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


