import styles from "./page.module.css";
import Image from "next/image";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import linkdin from "../../assets/images/linkdin.png";
import git from "../../assets/images/git.png";
export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2>
              If you feel like i might be a great fit, <br></br> i would love to
              hear from you!
            </h2>
            <div className={styles.address}>
              <p>Get in touch</p>
              <h3>+91 1234567890</h3>
              <h3>kD9vF@example.com</h3>
              <h3>123, ABC Street, XYZ City</h3>
            </div>
          </div>

          <div className="col-4">
            <div className={styles.follow}>
              <span className={styles.followText}>Follow me</span>
              <div>
                <a href="https://instagram.com/" target="_blank">
                  <span>
                    <Image src={instagram} alt="instagram" />
                  </span>
                </a>{" "}
                &nbsp;&nbsp;
                <a href="https://twitter.com/" target="_blank">
                  <span>
                    <Image src={twitter} alt="twitter" target="_blank" />
                  </span>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/in/varun-bhatia-5936a290/"
                  target="_blank">
                  <span>
                    <Image src={linkdin} alt="linkdin" />
                  </span>
                </a>
                &nbsp;&nbsp;
                <a href="https://github.com/ait-varun/" target="_blank">
                  <span>
                    <Image src={git} alt="github" />
                  </span>
                </a>
                &nbsp;&nbsp;
              </div>
            </div>
            <div className={styles.projectButton}>
              <h3>Ready to talk?</h3>
              <p>I&apos;ve got a good feeling about this</p>
              <button>Start a project</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
