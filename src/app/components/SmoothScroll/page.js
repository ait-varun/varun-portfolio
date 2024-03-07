"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        smooth: true,
        autoRaf: true,
        duration: 1,
      }}>
      {children}
    </ReactLenis>
  );
}
