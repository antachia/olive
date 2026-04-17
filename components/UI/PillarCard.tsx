const PillarCard = ({
  id,
  text,
  className,
}: {
  id: string
  text: string
  className?: string
}) => {
  return (
    <div
      className={`pillar-card relative aspect-video h-80 w-full bg-contain bg-center bg-no-repeat flex justify-center items-center ${className ?? ""}`}
      style={{ backgroundImage: "url(/images/landing/Old-Paper.png)" }}
    >

      <div>
        {/* Number label */}
        <p className="mb-4 font-garamond-lt-narrow text-[13px] tracking-widest text-accent/70 sm:text-[14px]">
          [ {id} ]
        </p>

        {/* Body text */}
        <p className="font-garamond-bd-narrow-ita max-w-2xs text-[15px] text-accent/80 sm:text-[16px] lg:text-[17px]">
          {text}
        </p>
      </div>
    </div>
  )
}

export default PillarCard
