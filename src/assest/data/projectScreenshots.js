// Project screenshots: paths to files in public/project_screenshot/
// Only 3 real screenshots kept: Medical, LLM Customer Support, Quillgpt. Rest use a shared placeholder.
// Run "npm run dev" or "npm run build" so predev/prebuild copies from src/assest/project_screenshot to public.

const base = '/project_screenshot/';
const placeholder = base + 'project_placeholder.png';

/** Project slug -> array of image paths (first = hero). */
export const projectScreenshots = {
  'workable-dag-engine': [placeholder],
  'edunexus-multi-tenant-saas': [placeholder],
  'document-intelligence-system': [base + 'chat with pdf analytics.png'],
  'aegistrace': [base + 'ai_agent_consensus_dashboard.png'],
  'kubewise': [base + 'advanced_sql_cost_analysis_tool.png'],
};

export default projectScreenshots;
