export const text = {
  initial: {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    scale: 1,
  },
  enter: {
    opacity: 0,
    x: "-50%",
    y: "calc(-50% - 50px)",
    scale: 0.9,
    transition: { 
      duration: 0.5, 
      delay: 0.3, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },
  exit: {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    scale: 1,
    transition: { 
      duration: 0.3, 
      delay: 0.1, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },
};


export const curve = (initialPath, targetPath) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

// Animates `y` (transform), NOT `top`.
//
// This used to animate `top` from -300px to -100vh. `top` is a layout property, so
// the browser treated every frame of the page-transition curve as the element
// changing position — measured as a single 0.667 layout shift, which was by itself
// most of the site's 1.33 CLS. Transforms are composited and never counted as CLS.
//
// The element keeps its static `top: -300px` from the inline style in NavCurve, and
// these values are the offsets RELATIVE to that, which is why enter is
// "calc(-100vh + 300px)" rather than "-100vh".
export const translate = {
  initial: {
    y: 0,
  },
  enter: {
    y: "calc(-100vh + 300px)",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      y: "calc(100vh + 300px)",
    },
  },
  exit: {
    y: 0,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};
