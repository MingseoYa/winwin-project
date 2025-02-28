"use client";

import { Heart, Pencil, Trash2 } from "lucide-react";
import styles from "./styles.module.css";
import { useMarketServiceDetailHeader } from "./hook";

export default function MarketServiceDetailHeader() {
  const {
    data,
    pickedCount,
    isLoggedUser,
    onClickPicked,
    onClickEdit,
    onClickDelete,
  } = useMarketServiceDetailHeader();

  return (
    <header className={styles.header}>
      <div className={styles.title_area}>
        <h2 className={styles.title}>{data?.fetchTravelproduct.name}</h2>
        <div className={styles.icon_area}>
          {isLoggedUser && (
            <Trash2
              color="#333333"
              className={styles.icon}
              onClick={onClickDelete}
            />
          )}
          {isLoggedUser && (
            <Pencil className={styles.icon} onClick={onClickEdit} />
          )}
          <button className={styles.pickedCount} onClick={onClickPicked}>
            <Heart color="#333333" className={styles.icon} />
            <p>{pickedCount}</p>
          </button>
        </div>
      </div>
      <h3 className={styles.remarks}>{data?.fetchTravelproduct.remarks}</h3>
      <h3 className={styles.tags}>
        {data?.fetchTravelproduct.tags?.length &&
          data.fetchTravelproduct.tags.join(" ")}
      </h3>
    </header>
  );
}
