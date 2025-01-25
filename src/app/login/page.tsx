import styles from "./styles.module.css";
import Login from "@/components/login/form";

export default function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <Login />
    </div>
  );
}
