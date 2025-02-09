import { MarketServiceDetailContentDescriptionProps } from "../../types";
import styles from "./styles.module.css";
import Dompurify from "dompurify";

export default function MarketServiceDetailContentDescription({
  contents,
}: MarketServiceDetailContentDescriptionProps) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>서비스 설명</h2>
      {typeof window !== "undefined" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(contents),
          }}
        />
      ) : (
        <div></div>
      )}
    </section>
  );
}
