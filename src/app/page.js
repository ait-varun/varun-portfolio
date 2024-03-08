"use client";

import styles from "./page.module.css";
import { useRef } from "react";
import Hero from "./components/hero/page";
import Education from "./components/education/page";
import Work from "./components/work/page";
import Projects from "./components/projects/page";
import Footer from "./components/footer/page";
export default function Home() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  function scrollto(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div ref={section1}>
          <Hero goToSectionRef={section4} scrollTo={scrollto} />
        </div>
        <div ref={section2}>
          <Education />
        </div>
        <div ref={section3}>
          <Work />
        </div>
        <div ref={section4} id="projects" className={styles.projects}>
          <Projects />
        </div>
        <div ref={section5}>
          <Footer />
        </div>
      </div>
    </main>
  );
}
