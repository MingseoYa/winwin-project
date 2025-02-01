import MainCarousel from "@/components/main/carousel";
import MainHeader from "@/components/main/header";
import { MainPopularService } from "@/components/main/popular-service";

export default function WinWinPage() {
  return (
    <main>
      <MainHeader />
      <MainCarousel />
      <MainPopularService />
    </main>
  );
}
