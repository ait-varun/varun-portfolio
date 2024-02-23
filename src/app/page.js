"use client";

import Image from "next/image";
import styles from "./page.module.css";
import profile from "./assets/images/profile-main.png";
import { useRef } from "react";
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
          <section
            className={styles.hero}
            gotosectionref={section2}
            scrollto={scrollto}>
            <header>
              <div className="container-fluid">
                <nav className={styles.navbar}>
                  <div>
                    <span className={styles.logo}>Varun</span>
                  </div>
                  <div>
                    <button>Get in touch</button>
                  </div>
                </nav>
              </div>
            </header>
            <div className="container">
              <div className="row">
                <div className={styles.heroImage}>
                  <Image src={profile} alt="Profile-pic" />
                  <div className={styles.heroContent}>
                    <h1>Hi, I am Varun</h1>
                    <h2>Web Developer</h2>
                    <p>
                      I have a strong passion for web development and have honed
                      my skills over the past year, specializing in JS
                      frameworks. With a solid foundation in these technologies,
                      I am confident in my ability to tackle complex challenges
                      and deliver exceptional results.
                    </p>
                    <button>Projects</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div ref={section2}>
          <section
            className={styles.marquee}
            gotosectionref={section3}
            scrollto={scrollto}>
            <div className={styles.marqueeBox}>
              <h2 className={styles.marqueeText}>
                &nbsp;EDUCATION <span>&nbsp;EDUCATION</span>&nbsp;EDUCATION
              </h2>
              <h2 className={styles.marqueeText}>
                <span>&nbsp;EDUCATION</span>&nbsp;EDUCATION{" "}
                <span>&nbsp;EDUCATION</span>
              </h2>
            </div>
            <div className={styles.studyHeader}>
              <h1>STUDY</h1>
            </div>
            <div className={styles.studyBefore}>
              <div className="container py-3">
                <div className="row">
                  <div className={styles.studyBox}>
                    <div className={styles.studyLeftContent}>
                      <span>2012-2016</span>
                      <h3>Baddi University</h3>
                      <h6>Baddi</h6>
                    </div>
                    <div className={styles.studyRightContent}>
                      <h3>Bachelors of Technology , Electrical Engineering</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.studyBefore}>
              <div className="container py-3">
                <div className="row">
                  <div className={styles.studyBox}>
                    <div className={styles.studyLeftContent}>
                      <span>2009</span>
                      <h3>Gurukul Public Sr. Sec. School</h3>
                      <h6>Joginder Nagar</h6>
                    </div>
                    <div className={styles.studyRightContent}>
                      <h3>12th, Non Medical</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div ref={section3}>
          <section
            className={styles.marquee}
            gotosectionref={section4}
            scrollto={scrollto}>
            <div className={styles.marqueeBox}>
              <h2 className={styles.marqueeText}>
                &nbsp;EXPERIENCE<span>&nbsp;EXPERIENCE</span>&nbsp;EXPERIENCE
              </h2>
              <h2 className={styles.marqueeText}>
                <span>&nbsp;EXPERIENCE</span>&nbsp;EXPERIENCE
                <span>&nbsp;EXPERIENCE</span>
              </h2>
            </div>
            <div className={styles.studyHeader}>
              <h1>WORK</h1>
            </div>
            <div className={styles.studyBefore}>
              <div className="container py-3">
                <div className="row">
                  <div className={styles.studyBox}>
                    <div className={styles.studyLeftContent}>
                      <span>JAN 2022 - PRESENT</span>
                      <h3>Analaytics It. Services</h3>
                      <h6>Mohali</h6>
                    </div>
                    <div className={styles.studyRightContent}>
                      <h3>Front End Developer</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.studyBefore}>
              <div className="container py-3">
                <div className="row">
                  <div className={styles.studyBox}>
                    <div className={styles.studyLeftContent}>
                      <span>MAR 2022 - JUN 2022</span>
                      <h3>Toxsl Technology Pvt. Ltd.</h3>
                      <h6>Mohali</h6>
                    </div>
                    <div className={styles.studyRightContent}>
                      <h3>Intern</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div ref={section4}>
          <section
            className={styles.marqueeProject}
            gotosectionref={section1}
            scrollto={scrollto}>
            <div className={styles.marqueeProjectBox}>
              <h2 className={styles.marqueeText}>
                PROJECTS&nbsp;<span>PROJECTS</span>&nbsp;PROJECTS
              </h2>
              <h2 className={styles.marqueeText}>
                <span>&nbsp;PROJECTS</span>&nbsp;PROJECTS{" "}
                <span>&nbsp;PROJECTS</span>
              </h2>
            </div>
            <div className={styles.projectHeader}>
              <h1>PROJECTS</h1>
            </div>
            <div className={styles.projectBefore}>
              <div className="container py-3">
                <div className="row">
                  <div className={styles.projectBox}>
                    <div className={styles.projectLeftContent}>
                      <h2 className="mt-2">House Dekho</h2>
                      <h6>Nuxt JS</h6>
                    </div>
                    <div className={styles.projectRightContent}>
                      <span>Vue JS</span>&nbsp;&nbsp;
                      <span>Bootstrap</span>&nbsp;&nbsp;
                      <span>Axios</span>
                      &nbsp;&nbsp;
                      <span>Swiper</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectBefore}>
              <div className="container py-3">
                <div className="row">
                  <div className={styles.projectBox}>
                    <div className={styles.projectLeftContent}>
                      <h2>Destiny Limousines</h2>
                      <h6>Angular</h6>
                    </div>
                    <div className={styles.projectRightContent}>
                      <span>Bootstrap</span>&nbsp;&nbsp;
                      <span>Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectBefore}>
              <div className="container py-3">
                <div className="row">
                  <div className={styles.projectBox}>
                    <div className={styles.projectLeftContent}>
                      <h2>Selland Technology</h2>
                      <h6>Svelte</h6>
                    </div>
                    <div className={styles.projectRightContent}>
                      <span>GraphQL</span>&nbsp;&nbsp;
                      <span>Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
