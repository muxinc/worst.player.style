const Prizes = () => {
  return (
    <div id="prizes" className="max-w-2xl mx-auto my-12 p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-xl md:text-5xl mt-4 mb-6 font-vcr text-plum drop-shadow-[2px_2px_0_#F26222]">Prizes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F7C016] p-4 border-2 border-black">
          <div className="flex items-center mb-3">
            <span className="bg-black text-white px-3 py-2 mr-3 font-bold text-xl">1</span>
            <span className="font-bold text-xl block">WINNING TEAM</span>
          </div>
          <span className="text-white bg-black px-2 py-1 inline-block mb-3">TWO MUX PEAK DESIGN BACKPACKS</span>
          <p className="text-black">The best way to carry your laptop and a few snacks</p>
        </div>

        <div className="bg-[#F26222] p-4 border-2 border-black">
          <div className="flex items-center mb-3">
            <span className="bg-black text-white px-3 py-2 mr-3 font-bold text-xl">2</span>
            <span className="font-bold text-xl block">WINNING HACKATHON PARTICIPANT</span>
          </div>
          <span className="text-white bg-black px-2 py-1 inline-block mb-3">MUX SONOS SPEAKER</span>
          <p className="text-black">Fill your space with sound as crisp as your code</p>
        </div>

        <div className="bg-[#EA3737] p-4 border-2 border-black">
          <div className="flex items-center mb-3">
            <span className="bg-black text-white px-3 py-2 mr-3 font-bold text-xl">3</span>
            <span className="font-bold text-xl block">IRL ENTRANTS</span>
          </div>
          <span className="text-white bg-black px-2 py-1 inline-block mb-3">MEDIA-CHROME T-SHIRT</span>
          <p className="text-black">Show up in person and walk away with some sick swag</p>
        </div>

        <div className="bg-[#A93C71] p-4 border-2 border-black">
          <div className="flex items-center mb-3">
            <span className="bg-black text-white px-3 py-2 mr-3 font-bold text-xl">4</span>
            <span className="font-bold text-xl block">ALL PARTICIPANTS</span>
          </div>
          <span className="text-white bg-black px-2 py-1 inline-block mb-3">$100 MUX CREDIT</span>
          <p className="text-white">Maybe you know him, his name is Abraham. Get Mux bucks, on us.</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
