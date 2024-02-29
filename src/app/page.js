"use client";

import styles from "./page.module.css";
import { useRef, useEffect, useLayoutEffect } from "react";
import Hero from "./components/hero/page";
import Education from "./components/education/page";
import Work from "./components/work/page";
import Projects from "./components/projects/page";
import Footer from "./components/footer/page";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Home() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const animation = useRef();
  function scrollto(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  // // gsap animations
  gsap.registerPlugin(ScrollTrigger);
  const sections = [section1, section2, section3, section4];

  useLayoutEffect(() => {
    sections.forEach((sectionRef, index) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          // end: "+=800",
          scrub: 1,
        },
      });

      // Add the clipPath animation to the timeline
      tl.fromTo(
        sectionRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
        {
          clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          scale: 0.8,
          y: -100,
          opacity: 0.9,
          // ease: "ease-in-out",
        }
      );
    });
  });

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div ref={section1}>
          <Hero goToSectionRef={section4} scrollTo={scrollto} />
        </div>
        <div ref={section2}>
          <div ref={animation}>
            <Education />
          </div>
        </div>
        <div ref={section3}>
          <Work />
        </div>
        <div ref={section4} id="projects">
          <Projects />
        </div>
        <div ref={section5}>
          <Footer />
        </div>
      </div>
    </main>
  );
}
