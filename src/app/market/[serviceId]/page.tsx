import MarketServiceDetail from "@/components/market-service/detail";
import { MarketServiceDetailQuestions } from "@/components/market-service/questions/question-list";

export default function MarketServiceDetailPage() {
  return (
    <div>
      <MarketServiceDetail />
      <MarketServiceDetailQuestions />
    </div>
  );
}
