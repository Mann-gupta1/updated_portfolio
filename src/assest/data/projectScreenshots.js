// Project slug -> screenshot paths (first entry is the hero image).
//
// Files live in public/project_screenshot/. The predev/prebuild step copies from
// src/assest/project_screenshot, so add new images to BOTH or the build overwrites
// public with the src copy.
//
// Two of these previously fell back to the grey placeholder even though usable
// screenshots were sitting unused in the folder. Every slug in WorkObj.js should
// have an entry here — a missing key renders a card with no image at all.

const base = '/project_screenshot/';
const placeholder = base + 'project_placeholder.jpg';

export const projectScreenshots = {
  // Acceltancy products
  'leadline-ai-messaging': [base + 'LLM Customer Support Agent.jpg'],
  'wedily-marketplace': [base + 'kanban_board_view.png'],
  'acceltancy-crm': [base + 'project_analytics_dashboard.png'],

  // Client and personal projects
  'document-intelligence-system': [base + 'chat with pdf analytics.png'],
  'aegistrace': [base + 'ai_agent_consensus_dashboard.png'],
  'workable-dag-engine': [base + 'ai_agent_orchestration_&_control_dashboard.png'],
  'edunexus-multi-tenant-saas': [base + 'vidyou_educational_feed_dashboard.png'],
  'kubewise': [base + 'advanced_sql_cost_analysis_tool.png'],
};

export { placeholder };
export default projectScreenshots;
