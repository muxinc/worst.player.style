const Hero = () => {
    return (
        <div className="text-center pt-[84px] mb-20">
            <h1 className="shadowify text-[106px] place-self-center font-extrabold tracking-tight text-plum bg-yella font-vcr py-4 px-10 leading-none mb-10 border-2 border-black"
                style={{
                    textShadow: `
                        -1.5px 0 0 #000000,
                        1.5px 0 0 #000000,
                        0 -1.5px 0 #000000,
                        0 1.5px 0 #000000
                    `
                }}
            >
                Let's Play
            </h1>

            <h2 className="text-base md:text-lg text-white mt-4 mb-6 font-vcr text-center -translate-y-[42px]">
                Who will build the most off-the-wall video player?
            </h2>
        </div>
    );
};

export default Hero;
