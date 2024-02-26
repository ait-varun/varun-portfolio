import styles from "./page.module.css";

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
  );
}
