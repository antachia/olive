import About from "@/components/Section/About";
import Contact from "@/components/Section/Contact";
import FAQ from "@/components/Section/FAQ";
import Landing from "@/components/Section/Landing";
import Process from "@/components/Section/Process";
import Products from "@/components/Section/Products";
import Scene from "@/components/UI/Scene";


export default function Home() {
  return (
    <main>
      <Scene />
      <Landing />
      <About />
      <Process />
      <Products />
      <Contact />
      <FAQ />
    </main>
  );
}
