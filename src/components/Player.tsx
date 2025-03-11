import {
    MediaController,
    MediaControlBar,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlayButton,
    MediaMuteButton,
  } from 'media-chrome/react';
import { useEffect, useRef } from 'react';

interface PlayerProps {
  isPlaying: boolean;
  timeRemaining: number;
}

const Player = ({ isPlaying, timeRemaining }: PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <MediaController id="player">
      <div 
        className={`
          absolute top-0 left-0 w-full h-full
          ${timeRemaining > 0 ? '-z-10' : 'z-10'}
          ${timeRemaining > 0 ? 'cursor-auto' : 'cursor-not-allowed'}
          ${timeRemaining > 0 ? 'bg-transparent' : 'bg-black/95'}
          flex flex-col justify-center items-center
          text-[#39FF14] text-4xl font-bold text-center
          [text-shadow:0_0_10px_#39FF14]
          bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.1)_0%,rgba(0,0,0,0)_70%)]
          before:content-[''] before:absolute before:inset-0
          before:bg-[repeating-linear-gradient(0deg,#000_0px,#000_1px,transparent_2px,transparent_4px)]
          before:opacity-20 before:pointer-events-none
          after:content-[''] after:absolute after:inset-0
          after:bg-[repeating-linear-gradient(90deg,#000_0px,#000_1px,transparent_2px,transparent_4px)]
          after:opacity-20 after:pointer-events-none
        `}
        onClick={(e) => {
          if (timeRemaining === 0) {
            e.preventDefault();
            e.stopPropagation(); 
          }
        }}
      >
        {timeRemaining === 0 && (
          <>
            <div className="animate-pulse">INSERT COIN</div>
            <div className="text-3xl mt-4 animate-pulse">TO PLAY</div>
            <div className="absolute top-4 left-4 text-sm">CREDITS: 0</div>
            <div className="absolute top-4 right-4 text-sm">HIGH SCORE: <MediaTimeDisplay></MediaTimeDisplay></div>
          </>
        )}
      </div>
      <video
        ref={videoRef}
        slot="media"
        src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
        preload="auto"
        muted
        crossOrigin=""
      />
      {timeRemaining > 0 && (
        <MediaControlBar>
          <MediaPlayButton></MediaPlayButton>
          
          <MediaMuteButton></MediaMuteButton>
          <MediaVolumeRange></MediaVolumeRange>
        </MediaControlBar>
      )}
    </MediaController>
  );
};

export default Player;