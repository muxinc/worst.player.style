import HR from "./HR";

const Judges = () => {
  return (
    <>
    <h2 id="judges" className="text-4xl md:text-5xl mt-4 mb-6 font-vcr text-plum drop-shadow-[2px_2px_0_#F26222]">Judges</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
      <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <img
          src="/images/dave_kiss_400x400.jpg"
          alt="Judge 1"
          className="w-32 h-32 mx-auto rounded-full border-4 border-black mb-4"
        />
        <h3 className="text-2xl font-vcr text-center mb-2 uppercase">Dave Kiss</h3>
        <p className="text-center font-aeonik">
          Spends his free time building crappy video players.
        </p>
      </div>

      <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <img
          src="/images/alex_d_400x400.jpg"
          alt="Judge 2"
          className="w-32 h-32 mx-auto rounded-full border-4 border-black mb-4"
        />
        <h3 className="text-2xl font-vcr text-center mb-2 uppercase">Alex de Chaves</h3>
        <p className="text-center font-aeonik">
          Mux's infamous support engineer
        </p>
      </div>

      <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <img
          src="/images/dar.webp"
          alt="Judge 3"
          className="w-32 h-32 mx-auto rounded-full border-4 border-black mb-4"
        />
        <h3 className="text-2xl font-vcr text-center mb-2 uppercase">Darius Cepulis</h3>
        <p className="text-center font-aeonik">
          Would rather be hiking.
        </p>
      </div>
    </div>
    <HR />
    </>
  );
};

export default Judges;
