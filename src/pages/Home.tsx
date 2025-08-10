import HomeHero from "../components/Home/HomeHero";
import Slider from "../components/Common/Slider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <HomeHero />
      <Slider />
    </div>
  );
}
