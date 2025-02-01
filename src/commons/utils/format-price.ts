export const formatPrice = (price: number): string => {
  return price.toLocaleString("en-US"); // ✅ 자동으로 3자리마다 콤마 추가
};
