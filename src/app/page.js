import Hero from "../components/Hero";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <main className="bg-[#0B0F1A] min-h-screen">
      <Hero />
      <Pricing />
    </main>
  );
}