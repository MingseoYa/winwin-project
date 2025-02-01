import styles from "./styles.module.css";

export default function MainHeader() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>프리랜서와 클라이언트를 연결하는 최적의 공간</h2>
      </header>
    </section>
  );
}
