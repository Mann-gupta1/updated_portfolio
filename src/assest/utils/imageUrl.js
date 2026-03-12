/**
 * Resolve project screenshot URL for img src or backgroundImage.
 * In the browser always uses full URL (origin + path) so images load in dev and static export.
 */
export function getProjectImageSrc(path) {
  if (!path || typeof path !== 'string') return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const encoded = path.split('/').map((part, i) => (i > 0 ? encodeURIComponent(part) : part)).join('/');
  if (typeof window !== 'undefined') {
    return window.location.origin + encoded;
  }
  const base = typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_BASE_URL;
  if (base) return base.replace(/\/$/, '') + encoded;
  return encoded;
}
