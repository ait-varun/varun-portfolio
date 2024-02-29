"use client";

import styles from "./page.module.css";
import Image from "next/image";
import profile from "../../assets/images/profile-main.png";
import user from "@/app/data/data";
import Link from "next/link";
import gsap from "gsap/gsap-core";
import { useEffect } from "react";
import { CSSPlugin } from "gsap/all";
export default function Hero({ scrollTo, goToSectionRef }) {
  // Register CSSPlugin
  gsap.registerPlugin(CSSPlugin);

  useEffect(() => {
    // Refactored animation configurations for better readability and standardization
    const logoAnimation = {
      opacity: 0,
      x: -100,
      scale: 0.5,
    };
    const buttonAnimation = {
      opacity: 0,
      x: 100,
      scale: 1,
    };
    const imageAnimation = {
      opacity: 0,
      x: -100,
      scale: 1,
    };
    const contentAnimation = {
      opacity: 0,
      x: 200,
      scale: 1,
    };

    // Refactored animation calls for better readability
    gsap.fromTo(
      ".logo",
      { ...logoAnimation },
      { opacity: 1, x: 0, scale: 1, duration: 2, ease: "back.out" }
    );
    gsap.fromTo(
      ".logoBtn",
      { ...buttonAnimation },
      { opacity: 1, x: 0, scale: 1, duration: 2, ease: "back.out" }
    );
    gsap.fromTo(
      ".heroImg",
      { ...imageAnimation },
      { opacity: 1, x: 0, scale: 1, duration: 2 }
    );
    gsap.fromTo(
      ".heroContent",
      { ...contentAnimation },
      { opacity: 1, x: 0, scale: 1, duration: 2 }
    );
  }, []);
  return (
    <section className={styles.hero}>
      <header>
        <div className="container-fluid">
          <nav className={styles.navbar}>
            <div>
              <span className={`${styles.logo} logo`}>Varun</span>
            </div>
            <div className="logoBtn">
              <button>
                <Link href="/get-in-touch">Get in touch</Link>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className={styles.heroImage}>
            <Image src={profile} alt="Profile-pic" className="heroImg" />
            <div className={`${styles.heroContent} heroContent`}>
              <h1>Hi, I am {user.description.name}</h1>
              <h2>{user.description.designation}</h2>
              <p>{user.description.description}</p>
              <button onClick={() => scrollTo(goToSectionRef)}>Projects</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
