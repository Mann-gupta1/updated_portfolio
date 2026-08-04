"use client";

// Isolation wrapper for the Spline 3D scene.
//
// Why this file exists: @splinetool/react-spline is ESM-only (its package exports
// declare an "import" condition but no "require"), so calling
// next/dynamic(() => import("@splinetool/react-spline")) fails the build with
// "Package path . is not exported" when webpack compiles the server bundle.
// Keeping the static ESM import here — and dynamic-importing THIS module with
// ssr:false — gives the lazy-loading behaviour without tripping that resolution.
//
// Net effect: three.js and the Spline runtime (~4 MB) plus the 971 KB scene load
// only when the footer scrolls into range, instead of on every page load.
import Spline from "@splinetool/react-spline";

function SplineScene({ scene = "/scene%20(1).splinecode" }) {
  return <Spline scene={scene} style={{ width: "100%", height: "100%" }} />;
}

export default SplineScene;
