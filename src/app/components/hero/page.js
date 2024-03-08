"use client";

import styles from "./page.module.css";
import Image from "next/image";
import profile from "../../assets/images/profile-main.png";
import user from "@/app/data/data";
import Link from "next/link";
export default function Hero({ scrollTo, goToSectionRef }) {
  return (
    <section className={styles.hero}>
      <header>
        <div className="container-fluid">
          <nav className={styles.navbar}>
            <div>
              <span className={styles.logo}>Varun</span>
            </div>
            <button>
              <Link href="/get-in-touch">Get in touch</Link>
            </button>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className={styles.heroImage}>
            <Image src={profile} alt="Profile-pic" />
            <div className={styles.heroContent}>
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
