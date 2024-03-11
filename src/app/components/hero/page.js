"use client";

import styles from "./page.module.css";
import Image from "next/image";
import profile from "../../assets/images/profile-main.png";
import user from "@/app/data/data";
import Link from "next/link";
import gsap from "gsap/gsap-core";
import { useLayoutEffect } from "react";
import { CSSPlugin } from "gsap/all";
export default function Hero({ scrollTo, goToSectionRef }) {
  // Register CSSPlugin
  gsap.registerPlugin(CSSPlugin);


  useLayoutEffect(() => {
    // Refactored animation configurations for better readability and standardization
    const logoAnimation = { opacity: 0, x: -100, scale: 0.5 };
    const buttonAnimation = { opacity: 0, x: 100, scale: 1 };
    const imageAnimation = { x: -100, scale: 1 };
    const contentAnimation = { opacity: 0, x: 200, scale: 1 };
    const imageMobileAnimation = { opacity: 0, scale: 0 };
    // Create a media query matcher
    const mm = gsap.matchMedia();

    // Add a media query for desktop screens
    mm.add("(min-width: 800px)", () => {
      // Desktop animations
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

      // Optional cleanup function
      return () => {
        // Custom cleanup code here (runs when it STOPS matching)
      };
    });

    // Add a media query for mobile screens
    mm.add("(max-width: 799px)", () => {
      // Mobile animations
      gsap.fromTo(
        ".logo",
        { ...logoAnimation },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: "back.out" }
      );
      gsap.fromTo(
        ".logoBtn",
        { ...buttonAnimation },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: "back.out" }
      );
      gsap.fromTo(
        ".heroImg",
        { ...imageMobileAnimation },
        { opacity: 1, scale: 1, duration: 1 }
      );
      gsap.fromTo(
        ".heroContent",
        { ...contentAnimation },
        { opacity: 1, x: 0, scale: 1, duration: 1 }
      );

      // Optional cleanup function
      return () => {
        // Custom cleanup code here (runs when it STOPS matching)
      };
    });
  }, []);
  return (
    <section className={styles.hero}>
      <header>
        <div className="container-fluid">
          <nav className={styles.navbar}>
            <div>
              <span className={`${styles.logo} logo`}>Varun</span>
            </div>
            <button className={`${styles.logoBtn} logoBtn`}>
              <Link href="/get-in-touch">Get in touch</Link>
            </button>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className={styles.heroImage}>
            <Image
              src={profile}
              alt="Profile-pic"
              className="heroImg"
              priority
            />
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
