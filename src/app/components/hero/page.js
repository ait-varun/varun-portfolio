import styles from "./page.module.css";
import Image from "next/image";
import profile from "../../assets/images/profile-main.png";
import { useRef } from "react";

export default function Hero({ scrollTo, goToSectionRef }) {
  const sectionRef = useRef();
  return (
    <section className={styles.hero} ref={sectionRef}>
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
                I have a strong passion for web development and have honed my
                skills over the past year, specializing in JS frameworks. With a
                solid foundation in these technologies, I am confident in my
                ability to tackle complex challenges and deliver exceptional
                results.
              </p>
              <button onClick={() => scrollTo(goToSectionRef)}>Projects</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
