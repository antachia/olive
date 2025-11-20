import About from "@/components/Section/About";
import Contact from "@/components/Section/Contact";
import Landing from "@/components/Section/Landing";
import Process from "@/components/Section/Process";
import Products from "@/components/Section/Products";


export default function Home() {

  return (
    <main>
      <Landing />
      <About />
      <Process />
      <Products />
      <Contact />
    </main>
  );
}
