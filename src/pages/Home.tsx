import HomeHero from "../components/HomeHero";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <HomeHero />
      <Slider />
    </div>
  );
}
