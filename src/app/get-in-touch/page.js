import styles from "./page.module.css";
import ContactForm from "../components/contact/page";
export default function GetInTouch() {
  return (
    <div className={styles.getInTouch}>
      <div className={styles.marqueeBox}>
        <h2 className={styles.marqueeText}>
          <span>&nbsp;GET IN TOUCH</span>
          <span>&nbsp;GET IN TOUCH</span>
          <span>&nbsp;GET IN TOUCH</span>
          <span>&nbsp;GET IN TOUCH</span>
          <span>&nbsp;GET IN TOUCH</span>
        </h2>
      </div>
      <ContactForm />
    </div>
  );
}
