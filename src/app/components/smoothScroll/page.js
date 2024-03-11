"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 1,
        syncTouchLerp: 0.075,
        lerp: 0.1,
      }}>
      {children}
    </ReactLenis>
  );
}

// smooth: true,
// autoRaf: true,
// duration: 1.5,
// smoothTouch: true,
