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
            <h3>
              If you feel like i might be a great fit, i would love to hear from
              you!
            </h3>
            <div>
              <p>Get in touch</p>
              <p>+91 1234567890</p>
              <p>kD9vF@example.com</p>
              <p>123, ABC Street, XYZ City</p>
            </div>
          </div>

          <div className="col-4">
            <div className={styles.follow}>
              <span>Follow me</span>
              <div>
                <a href="https://github.com/">
                  <Image src={instagram} alt="instagram" />
                </a>{" "}
                &nbsp;&nbsp;
                <a href="https://twitter.com/">
                  <Image src={twitter} alt="twitter" />
                </a>
                &nbsp;&nbsp;
                <a href="https://linkdin.com/">
                  <Image src={linkdin} alt="linkdin" />
                </a>
                &nbsp;&nbsp;
                <a href="https://linkdin.com/">
                  <Image src={git} alt="linkdin" />
                </a>
                &nbsp;&nbsp;
              </div>
            </div>
            <div>
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
