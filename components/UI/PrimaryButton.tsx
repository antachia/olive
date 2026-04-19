type PrimaryButtonProps = {
  text: string
  href?: string
  className?: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

const PrimaryButton = ({
  text,
  href,
  className = "",
  type = "button",
  onClick,
}: PrimaryButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center cursor-pointer rounded-sm bg-neonGreen px-10 py-2.5 font-garamond-lt-narrow font-extrabold tracking-wide text-black text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-200 hover:bg-neonGreen/80"

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {text}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
