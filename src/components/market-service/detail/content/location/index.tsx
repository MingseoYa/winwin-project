import { KakaoMapStandardSFull } from "@/commons/components/map";
import styles from "./styles.module.css";
import { MarketServiceDetailContentLocationProps } from "../../types";

export default function MarketServiceDetailContentLocation(
  travelproductAddress: MarketServiceDetailContentLocationProps
) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>서비스 지역</h2>
      <KakaoMapStandardSFull travelproductAddress={travelproductAddress} />
    </section>
  );
}
