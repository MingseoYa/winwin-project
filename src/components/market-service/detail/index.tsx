import styles from "./styles.module.css";
import MarketServiceDetailHeader from "./header";
import MarketServiceDetailContentDescription from "./content/description";
import MarketServiceDetailContentLocation from "./content/location";
import { MarketServiceDeatilContentImage } from "./content/image";
import { MarketServiceDetailAside } from "./aside";
export default function MarketServiceDetail() {
  return (
    <main className={styles.container}>
      <MarketServiceDetailHeader />
      <div className={styles.content}>
        <section>
          <MarketServiceDeatilContentImage />
          <MarketServiceDetailContentDescription />
          <MarketServiceDetailContentLocation />
        </section>
        <aside>
          <MarketServiceDetailAside />
        </aside>
      </div>
    </main>
  );
}
