import Image from "next/image";
import styles from "./page.module.css";
import profile from "./assets/images/profile-main.png";
export default function Home() {
  return (
    <main className={styles.main}>
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
      <section className={styles.hero}>
        <div className="container">
          <div className="row">
            <div className={styles.heroImage}>
              <Image src={profile} alt="Profile-pic" />
              <div className={styles.heroContent}>
                <h1>Hi, I am Varun</h1>
                <h2>Web Developer</h2>
                <p>
                  jhorem rfpsum golor sidt amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt utcjhg labore bet dolore magna
                  aliqua. Quis ipsum suspendisse ultrices gravida.
                </p>
                <button>Projects</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.marquee}>
        <div className={styles.marqueeBox}>
          <h2 className={styles.marqueeText}>
            EDUCATION <span>EDUCATION</span> EDUCATION
          </h2>
          <h2 className={styles.marqueeText}>
            <span>EDUCATION</span> EDUCATION <span> EDUCATION</span>
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
                  <h2>Baddi University</h2>
                  <h6>Baddi</h6>
                </div>
                <div className={styles.studyRightContent}>
                  <h2>Bachelors of Technology , Electrical Engineering</h2>
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
                  <h2>Gurukul Public Sr. Sec. School</h2>
                  <h6>Joginder Nagar</h6>
                </div>
                <div className={styles.studyRightContent}>
                  <h2>+2, Non Medical</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.marquee}>
        <div className={styles.marqueeBox}>
          <h2 className={styles.marqueeText}>
            EXPERIENCE <span>EXPERIENCE</span> EXPERIENCE
          </h2>
          <h2 className={styles.marqueeText}>
            <span>EXPERIENCE</span> EXPERIENCE <span> EXPERIENCE</span>
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
                  <h2>Analaytics It. Services</h2>
                  <h6>Mohali</h6>
                </div>
                <div className={styles.studyRightContent}>
                  <h2>Front End Developer</h2>
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
                  <h2>Toxsl Technology Pvt. Ltd.</h2>
                  <h6>Mohali</h6>
                </div>
                <div className={styles.studyRightContent}>
                  <h2>Intern</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
