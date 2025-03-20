import { useState, useEffect } from "react";
import Player from "./Player";
import CoinMech from "./CoinMech";

export default function PlayerComp() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [continueCountdown, setContinueCountdown] = useState(0);
  const CONTINUE_TIME = 8; // 8 seconds to continue
  const WARNING_THRESHOLD = 3; // Start warning animation when 3 seconds or less remain
  const TIME_PER_COIN = 3; // 5 seconds per coin

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
    const newTime = timeRemaining + TIME_PER_COIN; // Add seconds for each coin
    setTimeRemaining(newTime);
    setMaxTime(newTime); // Update max time when coins are added
  };

  return (
    <div className="flex items-end">
      <div className="relative flex-[4] flex flex-col justify-end">
        <Player
          isPlaying={isPlaying}
          timeRemaining={timeRemaining}
          continueCountdown={continueCountdown}
        />
        {timeRemaining > 0 && (
          <div className="absolute top-0 left-0 right-0 flex items-center bg-black border-b-4 border-[#39FF14] px-4 py-2">
            <div className="text-[#39FF14] text-2xl font-vcr mr-4">TIME</div>
            <div className="h-6 flex-1 bg-black border-2 border-[#39FF14] overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ease-linear ${timeRemaining <= WARNING_THRESHOLD ? 'animate-pulse' : ''}`}
                style={{
                  width: `${Math.max(((timeRemaining - 1) / (maxTime - 1)) * 100, 0)}%`,
                  background: timeRemaining <= WARNING_THRESHOLD
                    ? 'linear-gradient(90deg, #FF0000 0%, #FF6B00 100%)'
                    : 'linear-gradient(90deg, #39FF14 0%, #00FF94 100%)',
                  boxShadow: timeRemaining <= WARNING_THRESHOLD
                    ? '0 0 10px rgba(255, 0, 0, 0.5)'
                    : '0 0 10px rgba(57, 255, 20, 0.3)'
                }}
              />
            </div>
            <div className={`text-2xl font-vcr ml-4 ${timeRemaining <= WARNING_THRESHOLD ? 'text-red-500 animate-pulse' : 'text-[#39FF14]'}`}>
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