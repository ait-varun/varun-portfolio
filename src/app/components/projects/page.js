import styles from "./page.module.css";
import user from "@/app/data/data";
import Link from "next/link";
export default function Projects() {
  return (
    <section className={styles.marqueeProject}>
      <div className={styles.marqueeProjectBox}>
        <h2 className={styles.marqueeText}>
          <span>&nbsp;PROJECTS</span>
          <span>&nbsp;PROJECTS</span>
          <span>&nbsp;PROJECTS</span>
          <span>&nbsp;PROJECTS</span>
          <span>&nbsp;PROJECTS</span>
        </h2>
      </div>
      <div className={styles.projectHeader}>
        <h1>#PROJECTS</h1>
      </div>
      <div className={styles.projectBefore}>
        {user.projects.map((project, index) => (
          <div className="container py-3" key={index}>
            <Link href={project.url} key={index} target="_blank">
              <div className="row">
                <div className={styles.projectBox}>
                  <div className={styles.projectLeftContent}>
                    <h2>{project.name}</h2>
                    <h6>{project.frameworks}</h6>
                  </div>
                  <div className={styles.projectRightContent}>
                    {project.libraries.map((project, index) => (
                      <span key={index} className="ms-2">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
