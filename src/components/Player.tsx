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
          flex flex-col justify-center items-center
          text-gray-400 text-2xl font-medium text-center
          backdrop-grayscale backdrop-brightness-50 backdrop-contrast-75
          bg-black/50
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
            <div>Insert Coin</div>
            <div className="text-lg mt-2 text-gray-500">to continue watching</div>
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