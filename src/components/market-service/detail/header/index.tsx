import { Heart, MapPin, Share2, Trash2 } from "lucide-react";
import styles from "./styles.module.css";
import { MarketServicceDetailHeaderProps } from "../types";

export default function MarketServiceDetailHeader({
  name,
  remarks,
  tags,
}: MarketServicceDetailHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.title_area}>
        <h2 className={styles.title}>{name}</h2>
        {/* TODO: 아이콘 액션 */}
        <div className={styles.icon_area}>
          <Trash2 color="#333333" />
          <Share2 color="#333333" />
          <MapPin color="#333333" />
          <Heart color="#333333" />
        </div>
      </div>
      <h3 className={styles.remarks}>{remarks}</h3>
      <h3 className={styles.tags}>{tags?.length && tags.join(" ")}</h3>
    </header>
  );
}
