"use client";

import styles from "./page.module.css";
import { useRef } from "react";
import Hero from "./components/hero/page";
import Education from "./components/education/page";
import Work from "./components/work/page";
import Projects from "./components/projects/page";
export default function Home() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  function scrollto(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div ref={section1}>
          <Hero gotosectionref={section2} scrollto={scrollto} />
        </div>
        <div ref={section2}>
          <Education gotosectionref={section3} scrollto={scrollto} />
        </div>
        <div ref={section3}>
          <Work gotosectionref={section4} scrollto={scrollto} />
        </div>
        <div ref={section4}>
          <Projects gotosectionref={section1} scrollto={scrollto} />
        </div>
      </div>
    </main>
  );
}
