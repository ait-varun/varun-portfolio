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
    </main>
  );
}
