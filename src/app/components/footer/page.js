import styles from "./page.module.css";

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
            <div>
              <span>Follow me</span>
              <div>
                <a href="https://github.com/"></a>
                <a href="https://twitter.com/"></a>
                <a href="https://linkdin.com/"></a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
