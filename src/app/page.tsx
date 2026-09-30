import { Nav } from "@/components/ui/Nav";
import { SceneMount } from "@/components/three/SceneMount";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Stats } from "@/components/sections/Stats";
import { Security } from "@/components/sections/Security";
import { Timeline } from "@/components/sections/Timeline";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SceneMount />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Stats />
        <Security />
        <Timeline />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
