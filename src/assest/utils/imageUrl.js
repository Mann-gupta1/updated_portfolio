/**
 * Resolve a project screenshot URL for `img src` or `backgroundImage`.
 *
 * Always returns a ROOT-RELATIVE path (e.g. "/project_screenshot/foo.jpg").
 *
 * It used to return `window.location.origin + path` in the browser and a bare
 * relative path on the server. Those two strings differ, so React reported
 * "Prop `style` did not match. Server: ... Client: ..." on every project card and
 * threw away the server-rendered markup for that subtree. A root-relative URL
 * resolves identically in the browser, in `next dev`, and in the static export, so
 * server and client now produce byte-identical output.
 *
 * Absolute http(s) URLs are passed through untouched.
 */
export function getProjectImageSrc(path) {
  if (!path || typeof path !== 'string') return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  // Encode each segment (filenames contain spaces) but keep the leading slash.
  return path
    .split('/')
    .map((part, i) => (i > 0 ? encodeURIComponent(part) : part))
    .join('/');
}
