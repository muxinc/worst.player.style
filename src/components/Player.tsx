import {
  MediaController,
  MediaControlBar,
  MediaVolumeRange,
  MediaPlayButton,
  MediaMuteButton,
} from 'media-chrome/react';

import '@mux/mux-video';
import { useEffect, useRef } from 'react';

interface PlayerProps {
  isPlaying: boolean;
  timeRemaining: number;
  continueCountdown: number;
}

const Player = ({ isPlaying, timeRemaining, continueCountdown }: PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        if (continueCountdown === 0 && timeRemaining === 0) {
          const gameOverSound = new Audio('/game-over.m4a');
          gameOverSound.play();
          videoRef.current.currentTime = 0; // Reset video to beginning when continue countdown ends
        }
      }
    }
  }, [isPlaying, continueCountdown, timeRemaining]);

  return (
    <MediaController id="player">
      <div
        className={`
          absolute top-0 left-0 w-full h-full
          ${timeRemaining > 0 ? '-z-10' : 'z-10'}
          ${timeRemaining > 0 ? 'cursor-auto' : 'cursor-not-allowed'}
          flex flex-col justify-center items-center
          text-gray-400 text-2xl font-medium text-center
          backdrop-grayscale backdrop-brightness-50 backdrop-contrast-75
          bg-black/10
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
            {continueCountdown > 0 ? (
              <div className="flex flex-col items-center">
                <div className="text-[#FF0000] text-6xl font-bold mb-4 animate-pulse font-vcr">CONTINUE?</div>
                <div className="text-4xl font-bold font-vcr">{continueCountdown}</div>
                <div className="text-lg mt-4 text-gray-300 font-vcr">Insert Coin to Continue</div>
              </div>
            ) : (
              <>
                <div className="animate-pulse font-vcr">Insert Coin</div>
                <div className="text-lg mt-2 text-gray-500 animate-pulse font-vcr">to watch video</div>
              </>
            )}
          </>
        )}
      </div>
      {/* @ts-ignore */}
      <mux-video
        ref={videoRef}
        playback-id="PLtkNjmv028bYRJr8BkDlGw7SHOGkCl4d"
        slot="media"
        crossorigin
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