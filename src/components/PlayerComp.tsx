import { useState, useEffect } from "react";
import Player from "./Player";
import CoinMech from "./CoinMech";

export default function PlayerComp() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [continueCountdown, setContinueCountdown] = useState(0);
  const CONTINUE_TIME = 10; // 10 seconds to continue

  useEffect(() => {
    let timer: number;

    if (timeRemaining > 0) {
      setIsPlaying(true);
      setContinueCountdown(0); // Reset continue countdown when time is added
      timer = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsPlaying(false);
            setContinueCountdown(CONTINUE_TIME); // Start continue countdown when time runs out
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [timeRemaining]);

  useEffect(() => {
    let continueTimer: number;

    if (continueCountdown > 0) {
      continueTimer = window.setInterval(() => {
        setContinueCountdown((prev) => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (continueTimer) window.clearInterval(continueTimer);
    };
  }, [continueCountdown]);

  const handleCoinInserted = () => {
    setTimeRemaining((prev) => prev + 5); // Add 5 seconds for each coin
  };

  return (
    <div className="flex">
      <div className="relative flex-[3] flex flex-col justify-end">
        <Player
          isPlaying={isPlaying}
          timeRemaining={timeRemaining}
          continueCountdown={continueCountdown}
        />
        {timeRemaining > 0 && (
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <div className="text-[#39FF14] text-sm font-bold">TIME</div>
            <div className="h-4 w-32 bg-black/50 border-2 border-[#39FF14] rounded-sm overflow-hidden">
              <div
                className="h-full bg-[#39FF14] transition-all duration-1000 ease-linear"
                style={{ width: `${(timeRemaining / 20) * 100}%` }}
              />
            </div>
            <div className="text-[#39FF14] font-bold">
              {timeRemaining}
            </div>
          </div>
        )}
      </div>
      <div className="flex-[2]">
        <CoinMech onCoinInserted={handleCoinInserted} />
      </div>
    </div>
  );
}