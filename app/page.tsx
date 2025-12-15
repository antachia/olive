import About from "@/components/Section/About";
import Contact from "@/components/Section/Contact";
import FAQ from "@/components/Section/FAQ";
import Landing from "@/components/Section/Landing";
import Process from "@/components/Section/Process";
import Products from "@/components/Section/Products";
import Scene from "@/components/UI/Scene";

function getBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL
  if (raw) return raw.replace(/\/$/, "")
  return "https://example.com"
}


export default function Home() {
  const baseUrl = getBaseUrl()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Antachia",
    url: `${baseUrl}/`,
    description: "Premium olive oil crafted in Ethiopia.",
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
