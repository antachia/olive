import Button from "../UI/Button"
import RevealText from "../UI/RevealText"

const Landing = () => {
  return (
    <section id="landing" className="h-[110dvh] w-screen bg-[url(/imgs/landing.webp)] bg-cover bg-center flex flex-col justify-center items-center relative">
      <div className="bg-black/30 w-screen h-[110dvh] absolute inset-0" />
      <div className="flex flex-col justify-center items-center relative z-10 mb-10">
        <RevealText>
          <h1 className="font-[PPEditorialNew] text-white leading-40 text-[11rem] uppercase text-center">Antachia</h1>
        </RevealText>

        <RevealText split="words">
          <p className="text-white font-[PPEditorialNew-Ultralight] text-3xl">Olive oil from Ethiopia that carries the spirit of time — rooted, aged and rich with character.</p>
        </RevealText>

        <RevealText split="words">
          <p className="text-white font-[PPEditorialNew-Ultralight] text-3xl">We bottle curated collections of a kind, well aged batch olive oils without the inflated markup.</p>
        </RevealText>
      </div>
      <Button text="About Us" className="text-white border-white hover:bg-white hover:text-black" />
    </section>
  )
}

export default Landing