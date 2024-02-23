import styles from "./page.module.css";

export default function Projects() {
  return (
    <section className={styles.marqueeProject}>
      <div className={styles.marqueeProjectBox}>
        <h2 className={styles.marqueeText}>
          PROJECTS&nbsp;<span>PROJECTS</span>&nbsp;PROJECTS
        </h2>
        <h2 className={styles.marqueeText}>
          <span>&nbsp;PROJECTS</span>&nbsp;PROJECTS <span>&nbsp;PROJECTS</span>
        </h2>
      </div>
      <div className={styles.projectHeader}>
        <h1>PROJECTS</h1>
      </div>
      <div className={styles.projectBefore}>
        <div className="container py-3">
          <div className="row">
            <div className={styles.projectBox}>
              <div className={styles.projectLeftContent}>
                <h2 className="mt-2">House Dekho</h2>
                <h6>Nuxt JS</h6>
              </div>
              <div className={styles.projectRightContent}>
                <span>Vue JS</span>&nbsp;&nbsp;
                <span>Bootstrap</span>&nbsp;&nbsp;
                <span>Axios</span>
                &nbsp;&nbsp;
                <span>Swiper</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectBefore}>
        <div className="container py-3">
          <div className="row">
            <div className={styles.projectBox}>
              <div className={styles.projectLeftContent}>
                <h2>Destiny Limousines</h2>
                <h6>Angular</h6>
              </div>
              <div className={styles.projectRightContent}>
                <span>Bootstrap</span>&nbsp;&nbsp;
                <span>Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectBefore}>
        <div className="container py-3">
          <div className="row">
            <div className={styles.projectBox}>
              <div className={styles.projectLeftContent}>
                <h2>Selland Technology</h2>
                <h6>Svelte</h6>
              </div>
              <div className={styles.projectRightContent}>
                <span>GraphQL</span>&nbsp;&nbsp;
                <span>Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
