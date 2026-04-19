import Image from "next/image";

const AboutCard = ({ className, header, description }: { className?: string, header: string, description: string }) => {
    return (
        <div className={`w-[470px] h-[350px] z-30 rounded-2xl bg-accent flex flex-col justify-center px-6 py-8 text-center shadow-sm ${className}`}>
            {/* Icon */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white px-2 pb-1 rounded-2xl">
                <Image
                    src="/imgs/olive.webp"
                    alt={header}
                    width={100}
                    height={50}
                />
            </div>

            {/* Title */}
            <h2 className="mb-12 text-5xl uppercase font-mendl-semibold text-white">
                {header}
            </h2>

            {/* Description */}
            <p className="mx-auto px-6 text-white text-xl font-garamond-lt-narrow">
                {description}
            </p>
        </div>
    );
};

export default AboutCard;
