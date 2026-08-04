import React from "react";
import Link from "next/link";

// These used to import the 1024x1536 (1.8 MB each) source PNGs and render them at
// ~30px, so every page downloaded ~1.8 MB for a logo mark. Now 96px files at ~3 KB,
// which is still 2x the largest rendered size for retina.
// Explicit width/height are set to stop the logo contributing to layout shift.
const MARK_BLACK = "/mark-black-96.png";
const MARK_WHITE = "/mark-white-96.png";

function Logo({ whiteLogo }) {
  return (
    <Link href="/" aria-label="Mann Gupta, home">
      <img
        // object-contain: the mark is 2:3 but the CSS box is roughly square, which
        // Lighthouse flags as image-aspect-ratio (a stretched image). Contain keeps
        // the true ratio inside the box instead of distorting it.
        className=" item h-[1.8rem]  z-50 w-[1.7rem] lg:w-[1.9rem] lg:h-[2.3rem] cursor-pointer object-contain"
        src={!whiteLogo ? MARK_BLACK : MARK_WHITE}
        width={96}
        height={144}
        alt="Mann Gupta"
      />
    </Link>
  );
}

export default Logo;
