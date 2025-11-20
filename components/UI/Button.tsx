
const Button = ({ text, className }: { text: string, className?: string }) => {
    return (
        <button className={`py-1 px-8 border-2 relative z-10 text-xl rounded-xl font-[SuisseIntl-Regular] cursor-pointer transition-colors duration-300 ${className}`}>
            {text}
        </button>
    )
}

export default Button