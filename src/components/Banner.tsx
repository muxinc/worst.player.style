const Banner = () => {
    return (
        <>
            <style>
                {`
          @keyframes marquee {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-100%, 0); }
          }
          @keyframes marquee-reverse {
            0% { transform: translate(-100%, 0); }
            100% { transform: translate(0, 0); }
          }
          .animated-text-strip {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            overflow: hidden;
          }
          .marquee {
            white-space: nowrap;
            animation: marquee 5s linear infinite;
            max-width: none;
            font-family: 'VCR OSD Mono', monospace;
          }
          .marquee-reverse {
            white-space: nowrap;
            animation: marquee-reverse 15s linear infinite;
            max-width: none;
            font-family: 'VCR OSD Mono', monospace;
          }
          .marquee-slow {
            white-space: nowrap;
            animation: marquee 15s linear infinite;
            max-width: none;
            font-family: 'VCR OSD Mono', monospace;
          }
        `}
            </style>
            <div className="w-full flex flex-col">
                <div className="h-8 w-full bg-[#F7C016]">
                    <div className="animated-text-strip h-full">
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-black font-vcr">LET'S PLAY&nbsp;&nbsp;</span>
                    </div>
                </div>
                <div className="h-8 w-full bg-[#F26222]">
                    <div className="animated-text-strip h-full">
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                        <span className="marquee-reverse font-bold text-white font-vcr">LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;</span>
                    </div>
                </div>
                <div className="h-8 w-full bg-[#EA3737]">
                    <div className="animated-text-strip h-full">
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                        <span className="marquee font-bold text-white font-vcr">JOIN US ON MARCH 24&nbsp;&nbsp;</span>
                    </div>
                </div>
                <div className="h-8 w-full bg-[#A93C71]">
                    <div className="animated-text-strip h-full">
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                        <span className="marquee-slow font-bold text-white font-vcr">POWERED BY MUX&nbsp;&nbsp;</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
