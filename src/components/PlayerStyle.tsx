import PlayerStyleSvg from '../assets/player.style.svg';
const PlayerStyle = () => {
  return (
    <>
      <div className="w-full font-vcr text-2xl overflow-hidden whitespace-nowrap text-black leading-none translate-y-2">
        {'*'.repeat(55)}
      </div>

      <div className="w-full bg-black text-white font-vcr p-8 text-center">
        <p className="my-6 text-2xl max-w-2xl flex place-self-center">
          Need good-looking player inspiration? You won't find it here. Instead, check out
        </p>

        <p className="my-6">
          <a href="https://player.style" className="text-[#A93C71] hover:text-[#8A2E5D] transition-colors flex place-self-center">
            <img src={PlayerStyleSvg} alt="Player.style" className="w-64 filter invert" />
          </a>
        </p>
      </div>

      <div className="w-full font-vcr text-2xl overflow-hidden whitespace-nowrap text-black leading-none -translate-y-[1px]">
        {'*'.repeat(55)}
      </div>
    </>
  );
};

export default PlayerStyle;
