const VerticalLines = ({
  className,
  color = "bg-white",
}: {
  className?: string
  color?: string
}) => {
  return (
    <div className={`flex flex-row gap-2 h-16 ${className || ""}`}>
      <div className={`h-full w-px ${color}`} />
      <div className={`h-full w-px ${color}`} />
      <div className={`h-full w-px ${color}`} />
      <div className={`h-full w-px ${color}`} />
    </div>
  )
}

export default VerticalLines
