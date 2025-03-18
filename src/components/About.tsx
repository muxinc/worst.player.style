import HR from './HR';
const About = () => {
    return (
        <>
            <h2 id="about" className="text-xl md:text-5xl mt-4 mb-6 font-vcr text-plum drop-shadow-[2px_2px_0_#F26222]">About</h2>
            <div className="prose prose-lg mt-12 mb-16 max-w-4xl text-left">
                <p className="mb-8 text-2xl font-aeonik leading-relaxed">
                    Every video player looks the same. A rectangle with a play button. A progress bar at the bottom. A fullscreen button. Boooooorrrring. Remember when the internet was filled with creativity and individuality? Let's revisit that.
                </p>

                <p className="text-lg font-vcr leading-relaxed bg-white p-4 rounded-xs border-2 border-black">
                    <span className="animate-[blink_1s_ease-in-out_infinite]">▶</span> Your challenge: dream up the wildest, most unexpected video player you can imagine—and bring it to life using <a href="https://media-chrome.org" className="bg-vhs-blue text-white px-0 py-1 rounded-xs underline">Media Chrome</a>, a tool kit for building media players, made by <a href="https://mux.com" className="bg-vhs-blue text-white px-0 py-1 rounded-xs underline">Mux</a>.
                </p>
            </div>
            <HR />
        </>
    );
};

export default About;
