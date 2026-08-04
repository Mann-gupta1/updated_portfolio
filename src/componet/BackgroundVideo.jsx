import { useEffect, useState, useRef } from "react";
import assest3d from "../assest/glassyObj.mp4";

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  
  // Calculate initial scale immediately
  const getScale = (width) => {
    if (width < 640) {
      return 1;
    } else if (width < 768) {
      return 1.2;
    } else if (width < 1024) {
      return 1.1;
    } else if (width < 1280) {
      return 1.1;
    } else {
      return 1.08;
    }
  };

  const [videoScale, setVideoScale] = useState(1);
  const [mounted, setMounted] = useState(false);
  // The mp4 is 2.6 MB and sits BEHIND the hero copy, but it was competing with the
  // actual LCP element (the hero text) for bandwidth on first load. Attaching the
  // source only once the browser is idle takes it off the critical path entirely;
  // the decorative object then fades in a beat later.
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const start = () => setLoadVideo(true);
    if (typeof window === 'undefined') return;

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 2500 });
      return () => window.cancelIdleCallback?.(id);
    }
    const t = setTimeout(start, 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setVideoScale(getScale(width));
        setMounted(true);
      }
    }, 50);

    const handleResize = () => {
      const width = window.innerWidth;
      setVideoScale(getScale(width));
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <span className="item relative overflow-hidden w-full h-full block">
      <span className="item w-full h-[5rem] bg-main absolute -bottom-[8rem] right-0 z-20"></span>
      {/* preload="metadata": this file is 2.6 MB and sits behind the hero text.
          It was competing with the actual LCP element for bandwidth on first load.
          It still autoplays, just without demanding the whole file up front.
          aria-hidden because it is purely decorative. */}
      <video
        ref={videoRef}
        key={`video-${mounted}-${loadVideo}`}
        loop
        preload="none"
        aria-hidden="true"
        className="item obj3d w-full h-full object-cover transition-opacity duration-700"
        style={{ 
          transform: `scale(${videoScale}) translate3d(0, 0, 0)`,
          transformOrigin: 'center center',
          height: '100vh',
          width: '100vw',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          perspective: 1000,
          WebkitPerspective: 1000,
          transition: 'transform 0.1s ease-out',
          opacity: loadVideo ? 1 : 0,
        }}
        autoPlay
        muted
        playsInline
      >
        {loadVideo && <source src={assest3d} type="video/mp4" />}
      </video>
    </span>
  );
};

export default BackgroundVideo;