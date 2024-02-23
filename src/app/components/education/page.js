import styles from "./page.module.css";

export default function Education() {
  return (
    <section className={styles.marquee}>
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
  );
}
