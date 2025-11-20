import Button from "../UI/Button"

const Contact = () => {
    return (
        <div className="h-[50vh] -mt-20 w-screen bg-[url(/imgs/wine.jpg)] z-0 relative bg-cover bg-no-repeat flex flex-col justify-center items-center">
            <div className="bg-black/50 w-full h-full absolute inset-0"></div>
            <Button text="Contact Us" className="text-white border-white hover:bg-white hover:text-black"/>
        </div>
    )
}

export default Contact