// Project screenshots: paths to files in public/project_screenshot/
// Only 3 real screenshots kept: Medical, LLM Customer Support, Quillgpt. Rest use a shared placeholder.
// Run "npm run dev" or "npm run build" so predev/prebuild copies from src/assest/project_screenshot to public.

const base = '/project_screenshot/';
const placeholder = base + 'project_placeholder.png';

/** Project slug -> array of image paths (first = hero). */
export const projectScreenshots = {
  'production-llm-customer-support-agent': [base + 'LLM Customer Support Agent.png'],
  'agentic-ai-system': [placeholder],
  'quillgpt': [base + 'Quillgpt.png'],
  'optiquery': [placeholder],
  'medical-3d-learning-platform': [base + 'interactive medical platform.png'],
  'sonnet-music-recommendation': [placeholder],
  'dsa-learning-platform': [placeholder],
  'project-management-system': [placeholder],
  'player-ball-interaction-analysis': [placeholder],
  'pdf-chat-application': [placeholder],
  'stock-market-chatbot': [placeholder],
  'vidyou-educational-platform': [placeholder],
  'pneumonia-detection-system': [placeholder],
  'space-mission-autonomy-system': [placeholder],
};

export default projectScreenshots;
