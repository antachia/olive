import Image from "next/image"
import Button from "../UI/Button"
import AboutCard from "../UI/AboutCard"

const Process = () => {
    return (
        <section id="process" className="h-[150vh] w-screen flex items-center justify-center bg-background relative overflow-hidden z-0">
            {/* Background decorative lines */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1200 800">
                    <path d="M 100 200 Q 300 100 500 200" stroke="#b5a876" strokeWidth="2" fill="none" />
                    <path d="M 700 200 Q 900 300 1100 200" stroke="#b5a876" strokeWidth="2" fill="none" />
                    <path d="M 100 600 Q 300 700 500 600" stroke="#b5a876" strokeWidth="2" fill="none" />
                    <path d="M 700 600 Q 900 500 1100 600" stroke="#b5a876" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <AboutCard
                className="absolute top-24 right-[5%] rotate-6"
                header="Harvesting"
                description="Olives are carefully harvested at peak ripeness to preserve flavor, aroma, and nutritional value." />
            <AboutCard
                className="absolute top-1/4 left-[10%]"
                header="Sorting"
                description="Freshly harvested olives are sorted to remove leaves, stems, and any damaged fruit." />
            <AboutCard
                className="absolute bottom-30 left-[5%] rotate-6"
                header="Curing & Fermentation"
                description="Olives undergo controlled curing and natural fermentation to reduce bitterness and develop complexity." />
            <AboutCard
                className="absolute bottom-1/4 right-[5%] -rotate-6"
                header="Grading"
                description="Olives and oils are graded to meet strict standards, guaranteeing excellence in every batch." />

            {/* Top Left - Harvesting */}
            <div className="absolute top-20 left-[17%] text-center">
                <Image
                    src="/imgs/home.webp"
                    alt="Harvesting"
                    width={300}
                    height={200}
                    className="opacity-80"
                />
            </div>


            <div className="absolute bottom-20 right-[15%] text-center">
                <Image
                    src="/imgs/grading.webp"
                    alt="Grading"
                    width={280}
                    height={200}
                    className="opacity-80"
                />
            </div> 

            {/* Bottom Center - More Info */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-black font-[PPEditorialNew-Ultralight] mb-4 text-lg">More on our official Blog !</p>
                <Button text="Blog" className="border-primary text-primary hover:bg-primary hover:text-white" />
            </div>
        </section>
    )
}

export default Process