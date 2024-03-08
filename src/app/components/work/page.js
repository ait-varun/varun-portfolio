import styles from "./page.module.css";
import user from "@/app/data/data";
export default function Work() {
  return (
    <section className={styles.marquee}>
      <div className={styles.marqueeBox}>
        <h2 className={styles.marqueeText}>
          <span>&nbsp;EXPERIENCE</span>
          <span>&nbsp;EXPERIENCE</span>
          <span>&nbsp;EXPERIENCE</span>
          <span>&nbsp;EXPERIENCE</span>
          <span>&nbsp;EXPERIENCE</span>
        </h2>
      </div>
      <div className={styles.studyHeader}>
        <h1>#WORK</h1>
      </div>
      {user.experience.map((work, index) => (
        <div className={styles.studyBefore} key={index}>
          <div className="container py-3">
            <div className="row">
              <div className={styles.studyBox}>
                <div className={styles.studyLeftContent}>
                  <span>{work.year}</span>
                  <h3>{work.company}</h3>
                  <h6>{work.location}</h6>
                </div>
                <div className={styles.studyRightContent}>
                  <h3>{work.role}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
