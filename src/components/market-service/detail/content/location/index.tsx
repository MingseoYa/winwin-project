import { KakaoMapStandardSFull } from "@/commons/components/map";
import styles from "./styles.module.css";

interface IMarketServiceDetailContentLocation {
  lat: string;
  lng: string;
}

export default function MarketServiceDetailContentLocation({
  lat,
  lng,
}: IMarketServiceDetailContentLocation) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>서비스 지역</h2>
      <KakaoMapStandardSFull lat={lat} lng={lng} />
    </section>
  );
}
