import styles from "./page.module.css";
import user from "@/app/data/data";
export default function Education() {
  return (
    <section className={styles.marquee}>
      <div className={styles.marqueeBox}>
        <h2 className={styles.marqueeText}>
          <span>&nbsp;EDUCATION</span>
          <span>&nbsp;EDUCATION</span>
          <span>&nbsp;EDUCATION</span>
          <span>&nbsp;EDUCATION</span>
          <span>&nbsp;EDUCATION</span>
        </h2>
      </div>
      <div className={styles.studyHeader}>
        <h1>#STUDY</h1>
      </div>
      {user.education.map((study, index) => (
        <div className={styles.studyBefore} key={index}>
          <div className="container py-3">
            <div className="row">
              <div className={styles.studyBox}>
                <div className={styles.studyLeftContent}>
                  <span>{study.year}</span>
                  <h3>{study.institute}</h3>
                  <h6>{study.location}</h6>
                </div>
                <div className={styles.studyRightContent}>
                  <h3>
                    {study.degree} , {study.stream}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
