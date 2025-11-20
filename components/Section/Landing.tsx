import Button from "../UI/Button"

const Landing = () => {
  return (
    <section id="landing" className="h-[110dvh] w-screen bg-[url(/imgs/landing.webp)] bg-cover bg-center flex flex-col justify-center items-center relative">
      <div className="bg-black/30 w-screen h-[110dvh] absolute inset-0"/>
          <div className="flex flex-col justify-center items-center relative z-10 mb-10">
            <h1 className="font-[PPEditorialNew] text-white text-[11rem] uppercase text-center">Antakya</h1>
            <p className="text-white font-[PPEditorialNew-Ultralight] text-3xl">Olives and oils that carry the spirit of time, rooted, aged and rich with character.</p>
            <p className="text-white font-[PPEditorialNew-Ultralight] text-3xl">We bottle curated collections of a kind,</p>
            <p className="text-white font-[PPEditorialNew-Ultralight] text-3xl">well aged batch olive oils without the inflated markup.</p>
          </div>
            <Button text="About Us" className="text-white border-white hover:bg-white hover:text-black"/>
    </section>
  )
}

export default Landing