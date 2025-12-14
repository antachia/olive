const AboutCard = ({ className, header, description }: { className?: string, header: string, description: string }) => {
    return (
        <div className={`w-[470px] h-[350px] z-20 rounded-2xl bg-accent flex flex-col justify-evenly px-6 py-8 text-center shadow-sm ${className}`}>
            {/* Icon */}
            <div className="absolute -top-12 bg-white left-1/2 transform -translate-x-1/2 flex px-4 py-2 items-center justify-center rounded-full border border-white/70">
                <span className="text-7xl text-primary">☺</span>
            </div>

            {/* Title */}
            <h2 className="mb-4 text-5xl uppercase font-[PPEditorialNew] font-extrabold leading-tight text-white">
                {header}
            </h2>

            {/* Description */}
            <p className="mx-auto px-6 text-2xl text-secondary font-[PPEditorialNew-Ultralight]">
               {description}
            </p>
        </div>
    );
};

export default AboutCard;
