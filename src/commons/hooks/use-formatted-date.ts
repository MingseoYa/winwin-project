import { useMemo } from "react";

export const useFormattedDate = (isoString: string) => {
  return useMemo(() => {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    // 형식 1: YYYY.MM.DD
    const formatYYYYMMDD = `${year}.${month}.${day}`;

    // 형식 2: YY.MM.DD HH:mm
    const formatYYMMDDHHMM = `${String(year).slice(
      2
    )}.${month}.${day} ${hours}:${minutes}`;

    return { formatYYYYMMDD, formatYYMMDDHHMM };
  }, [isoString]);
};
