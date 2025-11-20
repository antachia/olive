"use client";

import Image from "next/image";
import { useState } from "react";

export const faqData = [
  {
    question: "What types of wine do you offer?",
    answer: `We offer a curated selection of small-batch wines: light whites, full-bodied reds, delicate rosés, and limited reserve vintages. Each label lists varietal and tasting notes so you know what to expect.`
  },
  {
    question: "Is the wine in the bottle raw or filtered?",
    answer: `Our wines are handled according to the varietal and producer’s style. Some are filtered for clarity, while others are bottle-conditioned or lightly fined to preserve body and character. See the label for details.`
  },
  {
    question: "How should I store an unopened bottle?",
    answer: `Store bottles on their sides in a cool, dark place with a stable temperature (around 12–16°C / 55–60°F). Avoid direct sunlight and large temperature swings to preserve flavor and avoid premature aging.`
  },
  {
    question: "What is the recommended serving temperature?",
    answer: `- Sparkling & light white: 6–9°C (43–48°F)
- Full-bodied white & rosé: 8–12°C (46–54°F)
- Light red: 12–14°C (54–57°F)
- Full-bodied red: 15–18°C (59–64°F)
Serving at the right temperature highlights aromas and balance.`
  },
  {
    question: "Are the bottles recyclable or reusable?",
    answer: `Yes — our glass bottles are recyclable. Many customers also repurpose bottles for home decor. Please rinse and recycle according to your local guidelines.`
  },
  {
    question: "How long will a bottle age once opened?",
    answer: `Opened wine keeps for a few days depending on type: whites and rosés 3–5 days in the fridge; lighter reds 3–5 days at cool room temperature; full-bodied reds 4–7 days. Use a vacuum stopper or inert-gas preserver to extend freshness.`
  },
  {
    question: "What should I know about the label and vintage?",
    answer: `The label contains the producer, varietal, vintage year, region, and sometimes tasting notes. The vintage indicates the year the grapes were harvested — weather that year affects the wine’s character.`
  },
  {
    question: "How do I care for a cork-sealed bottle?",
    answer: `Keep corked bottles on their side to keep the cork moist and airtight. If a cork is damaged or crumbly, decant carefully and consult the producer if you suspect spoilage.`
  },
  {
    question: "Do you ship internationally and what is your return policy?",
    answer: `We ship to select countries — shipping options and restrictions are listed at checkout. Returns depend on local regulations and the condition of the product; contact customer service within 7 days for damaged or incorrect shipments.`
  },
  {
    question: "What is special about the ‘bottle’ design?",
    answer: `Our 3D bottle asset and label artwork are crafted to reflect the vintage and story of each release. Labels use archival-quality paper and inks; bottles are chosen for shape and glass clarity to present the wine optimally.`
  }
];


const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full px-4 lg:px-24 py-24 bg-white rounded-t-[4rem] relative -mt-16">

      <div className="w-full mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-suisse-bold mb-8 font-[SuisseIntl]">
          FAQ
        </h2>

        <div className="md:w-1/2 space-y-2">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                onClick={() => handleToggle(idx)}
                aria-expanded={openIdx === idx}
                className="w-full flex items-center justify-between py-4 group text-left"
              >
                <span
                  className={`text-lg md:text-xl transition-colors duration-200 ${openIdx === idx ? "text-[#ff6633]" : "text-black"
                    } group-hover:text-primary font-suisse-bold cursor-pointer`}
                >
                  {faq.question}
                </span>

                <span
                  className={`ml-4 transition-transform duration-300 ${openIdx === idx
                    ? "rotate-45 text-primary font-suisse-bold cursor-pointer"
                    : "text-gray-400"
                    }`}
                  aria-hidden
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <line
                      x1="12"
                      y1="5"
                      x2="12"
                      y2="19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIdx === idx ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                  } text-base text-gray-600 font-suisse-regular`}
              >
                {faq.answer.split("\n").map((line, i) => (
                  <div key={i} className="mb-1">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-20 w-[400px] h-[600px] top-[20%]  z-20">
          <Image
            src="/imgs/faqWine.webp"
            alt="FAQ background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute right-[20%] w-[400px] h-[600px] top-0  z-20">
          <Image
            src="/imgs/faq1.webp"
            alt="FAQ background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute right-20 w-[400px] h-[600px] top-[30%]  z-20">
          <Image
            src="/imgs/faq2.webp"
            alt="FAQ background"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;