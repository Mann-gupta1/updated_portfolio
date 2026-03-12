'use client';

import { useState, useEffect } from 'react';

/**
 * Renders project screenshot with a URL that always works (dev + static export).
 * Sets src after mount so we use window.location.origin when in browser.
 */
export default function ProjectScreenshotImg({ path, alt, className, style, ...props }) {
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (!path || typeof path !== 'string') return;
    if (path.startsWith('http://') || path.startsWith('https://')) {
      setSrc(path);
      return;
    }
    const encoded = path.split('/').map((part, i) => (i > 0 ? encodeURIComponent(part) : part)).join('/');
    if (typeof window !== 'undefined') {
      setSrc(window.location.origin + encoded);
    } else {
      setSrc(encoded);
    }
  }, [path]);

  if (!path) return null;

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      style={style}
      loading="eager"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextElementSibling?.classList.remove('hidden');
      }}
      {...props}
    />
  );
}
