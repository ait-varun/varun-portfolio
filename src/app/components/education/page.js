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
        <h1>STUDY</h1>
      </div>
      {user.education.map((item, index) => (
        <div className={styles.studyBefore} key={index}>
          <div className="container py-3" >
            <div className="row">
              <div className={styles.studyBox}>
                <div className={styles.studyLeftContent}>
                  <span>{item.year}</span>
                  <h3>{item.institute}</h3>
                  <h6>{item.location}</h6>
                </div>
                <div className={styles.studyRightContent}>
                  <h3>
                    {item.degree} , {item.stream}
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
