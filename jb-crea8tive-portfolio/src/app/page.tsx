import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Portfolio />
    </main>
  );
}