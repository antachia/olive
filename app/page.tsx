import About from "@/components/Section/About";
import Bottles from "@/components/Section/Bottles";
import Contact from "@/components/Section/Contact";
import Delivery from "@/components/Section/Delivery";
import FAQ from "@/components/Section/FAQ";
import Landing from "@/components/Section/Landing";
import TransitionCanvas from "@/components/UI/TransitionCanvas";
import VerticalLines from "@/components/UI/VerticalLines";
import PreloaderGate from "@/components/Utilities/PreloaderGate";
import Image from "next/image";

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
    <PreloaderGate>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative h-[175vh]">
          <Landing />
          <TransitionCanvas />
          <About />

          {/* Green logo stamp — top center */}
          <div className="absolute z-20 -bottom-22 left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/landing/SVG/greenLogo.svg"
              alt="Antachia stamp"
              width={170}
              height={170}
              className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[170px] md:w-[170px]"
            />
          </div>

          {/* Animated straight lines */}
          <VerticalLines className="absolute left-1/4 -bottom-8 z-20" />
          <VerticalLines className="absolute right-1/4 -bottom-8 z-50" />
        </div>
        <Delivery />
        <Bottles />
        <Contact />
        {/* <FAQ /> */}
      </main>
    </PreloaderGate>
  );
}
