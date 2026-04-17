const GlassButton = ({
  text,
  href,
  className = "",
}: {
  text: string
  href?: string
  className?: string
}) => {
  const Tag = href ? "a" : "button"

  return (
    <Tag
      {...(href ? { href } : {})}
      className={`inline-flex items-center justify-center rounded border border-white/25 bg-white/5 px-7 py-2 backdrop-blur-xs hover:backdrop-blur-lg text-xl font-extrabold font-garamond-lt-narrow tracking-wide text-neonGreen cursor-pointer transition-all duration-500 ${className}`}
    >
      {text}
    </Tag>
  )
}

export default GlassButton
