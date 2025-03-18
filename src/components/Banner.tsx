const Banner = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .scroll-text {
            display: inline-block;
            white-space: nowrap;
            animation: scroll 20s linear infinite;
            font-family: 'VCR OSD Mono', monospace;
          }
          .scroll-text-reverse {
            display: inline-block;
            white-space: nowrap;
            animation: scroll-reverse 15s linear infinite;
            font-family: 'VCR OSD Mono', monospace;
          }
          .scroll-text-slow {
            display: inline-block;
            white-space: nowrap;
            animation: scroll 30s linear infinite;
            font-family: 'VCR OSD Mono', monospace;
          }
          .scroll-container {
            overflow: hidden;
            white-space: nowrap;
          }
          .noise {
            background-color: #DDD1C2;
            position: relative;
            isolation: isolate;
          }
        `}
      </style>
        <div className="w-full flex flex-col">
          <div className="h-8 w-full bg-[#F7C016] overflow-hidden">
            <div className="scroll-container h-full flex items-center">
              <div className="scroll-text font-bold text-black font-vcr">
                LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;
              </div>
              <div className="scroll-text font-bold text-black font-vcr">
                LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;
              </div>
              <div className="scroll-text font-bold text-black font-vcr">
                LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;LET'S PLAY&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
          <div className="h-8 w-full bg-[#F26222] overflow-hidden">
            <div className="scroll-container h-full flex items-center">
              <div className="scroll-text-reverse font-bold text-white font-vcr">
                LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;
              </div>
              <div className="scroll-text-reverse font-bold text-white font-vcr">
                LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;
              </div>
              <div className="scroll-text-reverse font-bold text-white font-vcr">
                LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;LIVE AT EPIC WEB CONF 2025&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
          <div className="h-8 w-full bg-[#EA3737] overflow-hidden">
            <div className="scroll-container h-full flex items-center">
              <div className="scroll-text font-bold text-white font-vcr">
                JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;
              </div>
              <div className="scroll-text font-bold text-white font-vcr">
                JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;
              </div>
              <div className="scroll-text font-bold text-white font-vcr">
                JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;JOIN US ON MARCH 24&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
          <div className="h-8 w-full bg-[#A93C71] overflow-hidden">
            <div className="scroll-container h-full flex items-center">
              <div className="scroll-text-slow font-bold text-white font-vcr">
                POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;
              </div>
              <div className="scroll-text-slow font-bold text-white font-vcr">
                POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;
              </div>
              <div className="scroll-text-slow font-bold text-white font-vcr">
                POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;
              </div>
              <div className="scroll-text-slow font-bold text-white font-vcr">
                POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;POWERED BY MUX&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Banner;
