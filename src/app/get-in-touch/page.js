import styles from "./page.module.css";
import ContactForm from "../components/contact/page";
export default function GetInTouch() {
  return (
    <div className={styles.getInTouch}>
      <ContactForm />
    </div>
  );
}
