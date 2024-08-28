import Image from 'next/image';

const OurServiceCard = ({ data }) => {
    return (
        <div className="rounded-3xl w-full sm:w-[384px] h-auto sm:h-[350px] p-4 bg-[#F26922] shadow-lg flex flex-col items-center justify-center mx-2 mb-4">
            <div className="w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] mb-4">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </div>
            <div className="text-center text-white">
                <h2 className="text-lg sm:text-[24px] md:text-[30px] font-semibold">{data.title}</h2>
                <p className="text-sm sm:text-base md:text-[18px] font-normal">{data.desc}</p>
            </div>
        </div>
    );
};

export default OurServiceCard;
