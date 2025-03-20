import PlayerStyleSvg from '../assets/player.style.svg';
import Asterisk from '../assets/asterisk.svg';
const PlayerStyle = () => {
  return (
    <>
        <img src={Asterisk} alt="Asterisk" className="w-full h-4" />

      <div className="w-full bg-black text-white font-vcr p-1 text-center">
        <p className="my-6 text-xl max-w-2xl flex place-self-center">
          Need good-looking player inspiration? You won't find it here. Instead, check out
        </p>

        <p className="my-6">
          <a href="https://player.style" className="text-[#A93C71] hover:text-[#8A2E5D] transition-colors flex place-self-center">
            <img src={PlayerStyleSvg} alt="Player.style" className="w-64 filter invert" />
          </a>
        </p>
      </div>

      <img src={Asterisk} alt="Asterisk" className="w-full h-4" />
    </>
  );
};

export default PlayerStyle;
