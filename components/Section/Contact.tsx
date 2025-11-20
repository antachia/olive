import Button from "../UI/Button"

const Contact = () => {
    return (
        <div className="h-[50vh] w-screen bg-[url(/imgs/wineBg.webp)] bg-center bg-contain flex flex-col justify-center items-center relative">
            <Button text="Contact Us" className="text-white border-white hover:bg-white hover:text-black"/>
        </div>
    )
}

export default Contact