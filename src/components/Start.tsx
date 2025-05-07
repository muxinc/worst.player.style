import { useState } from "react";
import HR from "./HR";
import CopyIcon from "../assets/copy.svg";
import Label from "./Label";
import Link from "./Link";

const HTML_TEMPLATE = `<!-- HTML Template -->
<media-controller id="player">
  <mux-video
    ref={videoRef}
    playback-id="PLtkNjmv028bYRJr8BkDlGw7SHOGkCl4d"
    slot="media"
    crossorigin
    muted
  />
  <media-control-bar>
    <media-play-button></media-play-button>
    <media-mute-button></media-mute-button>
    <media-time-range></media-time-range>
    <media-time-display></media-time-display>
    <media-fullscreen-button></media-fullscreen-button>
  </media-control-bar>
</media-controller>

<button id="play-button">Play</button>

<script src="https://cdn.jsdelivr.net/npm/@mux/mux-video@0"></script>

<script>
const video = document.querySelector('mux-video');
const playButton = document.querySelector('#play-button');

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = 'Pause';
  } else {
    video.pause();
    playButton.textContent = 'Play';
  }
});
</script>
`;

const REACT_TEMPLATE = `// React Template
import { MediaController } from 'media-chrome/react';
import { useRef } from 'react';
import MuxVideo from '@mux/mux-video-react';

interface PlayerProps {
  isPlaying: boolean;
}

const Player = ({ isPlaying }: PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }

  return (
    <>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <MediaController id="player">
      <MuxVideo
        ref={videoRef}
        playbackId="PLtkNjmv028bYRJr8BkDlGw7SHOGkCl4d"
        slot="media"
        crossorigin
        muted
      />
      </MediaController>
    </>
  );
};

export default Player;`;

const Start = () => {
    const [template, setTemplate] = useState("html");

    const handleTemplateChange = (template: string) => {
        setTemplate(template);
    };
    return (
        <>
            <div id="start" className="my-12">
                <h2 className="text-4xl md:text-5xl mt-4 mb-6 font-vcr text-plum drop-shadow-[2px_2px_0_#F26222]">Get Started</h2>

                <p className="mb-8 text-2xl font-aeonik leading-relaxed">
                    The best way to learn is by doing. So we've created a simple template to get you started.
                </p>

                <p className="mb-8 text-2xl font-aeonik leading-relaxed">First, install Media Chrome with <code className="bg-white px-1 rounded-md">npm install media-chrome</code> or by including the script tag in your HTML file.</p>

                <div className="lg:hidden mb-8 text-2xl font-aeonik leading-relaxed">
                    View the starter templates:
                    <ul className="list-disc pl-8 mt-4">
                        <li><Link href="https://gist.github.com/davekiss/e30c3d14177b7d21f883947dff3d8544">HTML Template</Link></li>
                        <li><Link href="https://gist.github.com/davekiss/eae7c82824929826c4066b37db86474e">React Template</Link></li>
                    </ul>
                </div>

                <div className="hidden lg:block mb-8">
                    <div className="flex">
                        <button
                            onClick={() => handleTemplateChange("html")}
                            className={`px-4 py-2 font-vcr border-2 border-black cursor-pointer hover:bg-gray-100 ${template === "html"
                                    ? "bg-white border-b-0"
                                    : "bg-gray-200 border-b-2"
                                }`}
                        >
                            HTML
                        </button>
                        <button
                            onClick={() => handleTemplateChange("react")}
                            className={`px-4 py-2 font-vcr border-2 border-black cursor-pointer hover:bg-gray-100 ${template === "react"
                                    ? "bg-white border-b-0"
                                    : "bg-gray-200 border-b-2"
                                }`}
                        >
                            React
                        </button>
                        <div className="flex-1 border-b-2 border-black"></div>
                    </div>

                    <div className="border-2 border-black p-4 bg-[#F5F0EC] relative overflow-x-auto w-full">
                        <button
                            onClick={() => {
                                const code = template === "html" ? HTML_TEMPLATE : REACT_TEMPLATE;
                                navigator.clipboard.writeText(code);
                                const btn = document.querySelector('#copyBtn') as HTMLButtonElement;
                                const originalText = btn.innerHTML;
                                btn.innerHTML = 'GANKED IT!';
                                setTimeout(() => {
                                    btn.innerHTML = originalText;
                                }, 2000);
                            }}
                            id="copyBtn"
                            className="absolute top-2 right-2 bg-vhs-blue text-white px-3 py-1 font-vcr flex items-center gap-2 hover:bg-blue-700 transition-colors"
                        >

                            COPY
                            <img src={CopyIcon} alt="Copy" className="w-4 h-4" />
                        </button>
                        {template === "html" ? (
                            <pre className="font-mono text-sm">
                                <code>{HTML_TEMPLATE}</code>
                            </pre>
                        ) : (
                            <pre className="font-mono text-sm">
                                <code>{REACT_TEMPLATE}</code>
                            </pre>
                        )}
                    </div>
                </div>

                <Label>Docs and Resources</Label>
                <p className="mb-8 text-2xl font-aeonik leading-relaxed">Find components, examples, and everything you need to build your player in the Media Chrome docs: <Link href="https://media-chrome.org/docs">Media Chrome Docs</Link></p>
            </div>

            <HR />
        </>
    );
};

export default Start;
