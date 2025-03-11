// import Player from './components/Player';
import CoinMech from './components/CoinMech';
function App() {
  return (
    <>
      <style>
        {`
          .retro-texture {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
            background-repeat: repeat;
          }
          .vhs-flicker {
            animation: flicker 0.5s infinite alternate;
          }
          @keyframes flicker {
            0% { opacity: 0.9; }
            100% { opacity: 1; }
          }
          .tracking-lines {
            background: repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.05),
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px,
              transparent 4px
            );
          }
        `}
      </style>
      <div className="bg-[#EFE8DA] retro-texture tracking-lines min-h-screen">
        <div className="w-full flex flex-col">
          <div className="h-10 w-full bg-[#F7C016]"></div>
          <div className="h-10 w-full bg-[#F26222]"></div>
          <div className="h-10 w-full bg-[#EA3737]"></div>
          <div className="h-10 w-full bg-[#A93C71]"></div>
        </div>
        <div className="container mx-auto text-center py-6">
          <h1 className="text-[8rem] md:text-[12rem] font-extrabold tracking-tight text-gray-900 uppercase vhs-flicker" style={{textShadow: 
            `3px 3px 0 #F7C016,
            6px 6px 0 #F26222,
            9px 9px 0 #EA3737,
            12px 12px 0 #A93C71`}}>
            <span className="block">Let's Play</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#A93C71] mt-4 mb-6">Who will build the most off-the-wall video player?</h2>
          
          <div className="bg-[#EA3737] text-white p-4 mb-8 inline-block transform -rotate-2 border-2 border-black shadow-lg">
            <p className="text-xl md:text-2xl font-bold">LIVE at Epic Web Conf 2025!</p>
            <p className="text-lg">Join us in-person or participate remotely</p>
          </div>

          <CoinMech />
          
          <div className="prose prose-lg mx-auto mt-12 mb-16 px-4 max-w-4xl text-left">
            <p className="mb-8 text-3xl font-serif leading-relaxed">
              Every video player looks the same. A rectangle with a play button. A progress bar at the bottom. A fullscreen button.
            </p>

            <p className="mb-8 text-3xl font-serif leading-relaxed italic">
              Boooooorrrring.
            </p>

            <p className="mb-8 text-3xl font-serif leading-relaxed">
              Remember when the internet was filled with creativity and individuality?
            </p>

            <p className="mb-8 text-3xl font-serif leading-relaxed">
              Let's revisit that.
            </p>

            <p className="text-3xl font-serif leading-relaxed">
              Your challenge: dream up the wildest, most unexpected video player you can imagine—and bring it to life using <a href="https://media-chrome.org" className="text-[#A93C71] hover:underline font-bold">Media Chrome</a>, a tool kit for building media players, made by <a href="https://mux.com" className="text-[#A93C71] hover:underline font-bold">Mux</a>.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto my-12 p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-bold mb-6 uppercase">CONTEST RULES</h3>
            <ul className="text-left text-lg space-y-4">
              <li className="border-b-2 border-black pb-2"><strong className="bg-black text-white px-2 py-1 mr-2">MUST BE FUNCTIONAL:</strong> Your wild creation needs to actually work. Play, pause, seek, etc.</li>
              <li className="border-b-2 border-black pb-2"><strong className="bg-black text-white px-2 py-1 mr-2">CREATIVITY COUNTS:</strong> The weirder, the better. Make us laugh!</li>
              <li className="border-b-2 border-black pb-2"><strong className="bg-black text-white px-2 py-1 mr-2">UNIQUENESS WINS:</strong> Show us something we've never seen before</li>
              <li className="border-b-2 border-black pb-2"><strong className="bg-black text-white px-2 py-1 mr-2">GO WILD:</strong> Ugly is fine! Unconventional is encouraged!</li>
            </ul>
          </div>

          <div className="max-w-2xl mx-auto my-12 p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-bold mb-6 uppercase text-center">JUDGES</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F7C016] p-4 border-2 border-black">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-bold text-xl block">Judge One</span>
                </div>
                <p className="text-black">"Once judged a pie-eating contest but ate all the evidence."</p>
              </div>
              
              <div className="bg-[#F26222] p-4 border-2 border-black">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-bold text-xl block">Judge Two</span>
                </div>
                <p className="text-black">"Can't code but can critique with the confidence of a thousand developers."</p>
              </div>
              
              <div className="bg-[#EA3737] p-4 border-2 border-black">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-bold text-xl block">Judge Three</span>
                </div>
                <p className="text-black">"Believes all video players should meow when paused."</p>
              </div>
              
              <div className="bg-[#A93C71] p-4 border-2 border-black">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-bold text-xl block">Judge Four</span>
                </div>
                <p className="text-white">"Once debugged code using only interpretive dance and succeeded."</p>
              </div>
              
              <div className="bg-black p-4 border-2 border-white col-span-1 md:col-span-2">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-bold text-xl block text-white">Judge Five</span>
                </div>
                <p className="text-white">"Secretly believes the best UI is no UI, but don't tell the other judges."</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto my-12 p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-bold mb-6 uppercase text-center">PRIZES</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F7C016] p-4 border-2 border-black">
                <div className="flex items-center mb-3">
                  <span className="bg-black text-white px-3 py-2 mr-3 font-bold text-xl">1</span>
                  <span className="font-bold text-xl block">WINNING TEAM</span>
                </div>
                <span className="text-white bg-black px-2 py-1 inline-block mb-3">TWO MUX PEAK DESIGN BACKPACKS</span>
                <p className="text-black">The best way to carry your laptop and a few snacks</p>
              </div>
              
              <div className="bg-[#F26222] p-4 border-2 border-black">
                <div className="flex items-center mb-3">
                  <span className="bg-black text-white px-3 py-2 mr-3 font-bold text-xl">2</span>
                  <span className="font-bold text-xl block">WINNING HACKATHON PARTICIPANT</span>
                </div>
                <span className="text-white bg-black px-2 py-1 inline-block mb-3">MUX SONOS SPEAKER</span>
                <p className="text-black">Fill your space with sound as crisp as your code</p>
              </div>
              
              <div className="bg-[#EA3737] p-4 border-2 border-black">
                <div className="flex items-center mb-3">
                  <span className="bg-black text-white px-3 py-2 mr-3 font-bold text-xl">3</span>
                  <span className="font-bold text-xl block">IRL ENTRANTS</span>
                </div>
                <span className="text-white bg-black px-2 py-1 inline-block mb-3">MEDIA-CHROME T-SHIRT</span>
                <p className="text-black">Show up in person and walk away with some sick swag</p>
              </div>
              
              <div className="bg-[#A93C71] p-4 border-2 border-black">
                <div className="flex items-center mb-3">
                  <span className="bg-black text-white px-3 py-2 mr-3 font-bold text-xl">4</span>
                  <span className="font-bold text-xl block">ALL PARTICIPANTS</span>
                </div>
                <span className="text-white bg-black px-2 py-1 inline-block mb-3">$100 MUX CREDIT</span>
                <p className="text-white">Maybe you know him, his name is Abraham. Get Mux bucks, on us.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4">Need good-looking player inspiration? <br />You won't find it here. <br />Instead, check out</h3>
            <a href="https://player.style" className="inline-block mb-6 text-[#A93C71] hover:text-[#8A2E5D] transition-colors">
              <svg className="w-[130px] h-[26px] md:w-[170px] md:h-[34px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 150 30" width="150" height="30"><path fill="currentColor" d="M14.664 11.78c.627 1.199.935 2.608.935 4.216s-.314 2.96-.935 4.158c-.628 1.198-1.493 2.127-2.601 2.78-1.109.653-2.37.98-3.78.98-1.147 0-2.146-.211-2.992-.634-.845-.423-1.524-1-2.024-1.723v8.225H0V8.264h2.844l.391 2.3c1.25-1.653 2.934-2.48 5.048-2.48 1.41 0 2.671.32 3.78.955 1.108.634 1.973 1.55 2.6 2.748v-.006Zm-2.39 4.223c0-1.531-.416-2.774-1.255-3.722-.84-.949-1.929-1.423-3.28-1.423-1.352 0-2.441.468-3.268 1.403-.826.936-1.242 2.166-1.242 3.671s.416 2.812 1.242 3.78c.827.967 1.916 1.448 3.268 1.448 1.351 0 2.44-.48 3.28-1.448.839-.968 1.255-2.21 1.255-3.722v.013Zm9.219-13.428v21.166h-3.267V2.575h3.267Zm18.02 21.166H37.79c-1.006 0-1.736-.211-2.178-.634-.442-.423-.666-1.038-.666-1.845-1.166 1.774-2.87 2.659-5.113 2.659-1.736 0-3.126-.404-4.17-1.211-1.05-.807-1.57-1.916-1.57-3.325 0-1.595.564-2.819 1.692-3.67 1.127-.86 2.774-1.288 4.926-1.288h3.901v-.936c0-.864-.3-1.55-.91-2.043-.601-.494-1.44-.743-2.51-.743-.949 0-1.73.205-2.345.621-.615.416-.98.961-1.102 1.646h-3.203c.16-1.55.846-2.754 2.056-3.613 1.211-.858 2.793-1.287 4.747-1.287 2.076 0 3.677.48 4.805 1.454 1.127.967 1.691 2.357 1.691 4.17v6.105c0 .724.346 1.09 1.025 1.09h.634v2.844l.013.006Zm-8.95-6.893c-1.005 0-1.78.199-2.325.59-.544.39-.813.973-.813 1.736 0 .666.256 1.198.768 1.601.513.404 1.218.602 2.102.602 1.351 0 2.402-.365 3.158-1.089.756-.724 1.147-1.69 1.166-2.902v-.544H30.57l-.006.006Zm16.509 3.357 4.203-11.941h3.478L47.74 26.163c-.365.929-.699 1.64-1 2.133-.3.493-.672.865-1.12 1.121-.443.25-1.039.378-1.782.378h-3.504v-2.87h2.3c.628 0 1.057-.096 1.3-.288.244-.192.494-.622.756-1.288l.635-1.48L39.276 8.27h3.479l4.324 11.941-.007-.006Zm11.775-11.14c1.14-.654 2.44-.98 3.914-.98 1.473 0 2.806.3 3.946.91a6.7 6.7 0 0 1 2.69 2.568c.654 1.108.994 2.409 1.013 3.901 0 .404-.032.814-.09 1.237H58.648v.18c.084 1.35.506 2.42 1.269 3.202.768.788 1.78 1.179 3.055 1.179 1.006 0 1.858-.237 2.537-.711.686-.474 1.14-1.147 1.358-2.012h3.267c-.281 1.576-1.044 2.864-2.28 3.87-1.243 1.006-2.787 1.512-4.638 1.512-1.614 0-3.017-.327-4.215-.98a6.844 6.844 0 0 1-2.78-2.768c-.654-1.192-.98-2.569-.98-4.138 0-1.57.32-2.992.954-4.19.634-1.198 1.524-2.127 2.658-2.78h-.006Zm6.893 2.6c-.756-.634-1.71-.954-2.857-.954-1.07 0-1.992.327-2.768.98-.775.654-1.223 1.525-1.345 2.614h8.315c-.14-1.127-.59-2.012-1.345-2.646v.007Zm15.855-.352h-1.454c-1.352 0-2.326.436-2.934 1.313-.602.878-.91 1.993-.91 3.338v7.77H73.03V8.265h2.902l.365 2.325a4.948 4.948 0 0 1 1.724-1.71c.704-.416 1.652-.621 2.844-.621h.724v3.055h.006Zm2.659 8.495c.602 0 1.108.192 1.511.576.404.385.603.878.603 1.48s-.199 1.096-.602 1.48c-.404.384-.91.577-1.512.577-.603 0-1.102-.193-1.5-.577-.39-.384-.589-.878-.589-1.48s.199-1.095.59-1.48c.39-.384.89-.576 1.499-.576ZM98.02 7.854c-2.863 0-4.631 2.088-4.631 4.023 0 1.384.403 2.377 2.928 4.946 1.909 1.953 2.408 2.504 2.408 3.517 0 1.012-.877 1.985-2.55 1.985-1.396 0-2.594-.538-3.773-1.69l-.16-.16-1.377 1.274.14.173c1.186 1.448 2.82 2.178 4.857 2.178 2.94 0 4.843-1.55 4.843-3.96 0-1.62-.756-2.478-3.133-4.945-1.864-1.94-2.165-2.639-2.165-3.549 0-1.204.974-2.05 2.377-2.05 1.024 0 1.96.231 3.036.743l.218.103.756-1.62-.205-.11c-1.224-.634-1.948-.858-3.562-.858h-.007Zm14.92 11.012-1.358-.878-.134.193c-.929 1.37-2.819 3.235-4.017 3.99-.064-.3-.077-.666-.077-1.095 0-.602.058-1.396.173-2.293l1.057-8.719h4.741l.237-1.838h-4.741l.667-5.292-1.807.09-.871 5.253-2.62.198-.199 1.519 2.582.064-1.012 7.732c-.205 1.473-.314 2.857-.314 3.882 0 1.134.211 2.428 1.845 2.428 1.633 0 4.618-2.838 5.752-5.042l.103-.192h-.007Zm12.973-10.871-1.858.263.045.25c.205 1.095.307 2.107.307 2.94 0 3.248-.755 5.701-3.081 9.84-1.025-4.139-3.145-10.404-4.657-13.146l-.103-.18-1.793.654.102.23c1.723 3.992 3.946 10.328 4.882 14.793-1.871 2.697-4.184 4.106-7.483 4.56l-.256.033.378 1.762.218-.026c4.375-.551 7.373-2.831 10.358-7.886 2.973-5.093 3.556-7.81 3.556-10.775 0-1.096-.231-2.415-.545-3.152l-.07-.167v.007Zm7.995 13.517c-.673.25-1.871.621-2.704.82a20.36 20.36 0 0 1 .135-1.896l2.024-17.194c.071-.61.109-1.224.109-1.685 0-.462-.07-.968-.186-1.358l-.051-.193-1.505.135-2.358 19.98-.051.41c-.083.693-.16 1.288-.16 1.782 0 1.262.448 1.8 1.492 1.8 1.275 0 2.806-.526 3.908-1.34l.16-.12-.608-1.205-.199.077-.006-.013Zm13.754-3.46-.135.193c-1.96 2.754-3.747 3.984-5.797 3.984-1.339 0-2.883-.48-2.966-4.177 5.618-2.19 8.469-4.663 8.469-7.335 0-1.32-.551-2.895-3.171-2.895-4.51 0-7.419 3.99-7.419 10.166 0 4.056 1.615 6.118 4.805 6.118 2.831 0 5.15-1.505 7.514-4.881l.141-.199-1.441-.96v-.014Zm-4.017-8.494c1.121 0 1.538.41 1.538 1.518 0 1.185-1.685 3.216-6.4 5.112.295-3.927 2.261-6.636 4.862-6.636v.006Z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto my-12 p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-3xl font-bold mb-6 uppercase">Your Boilerplate Awaits...</h3>
          <p className="text-xl mb-4">Start with our template and just lose it</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="font-bold text-lg mb-2">HTML/Web Components</h4>
              <div className="bg-black text-green-400 p-4 border-2 border-black font-mono text-sm overflow-x-auto h-full">
                <pre>// The world's most boring player


// Now make it BONKERS!</pre>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">React Version</h4>
              <div className="bg-black text-green-400 p-4 border-2 border-black font-mono text-sm overflow-x-auto h-full">
                <pre>// React player starter


// Now make it WILD!</pre>
              </div>
            </div>
          </div>
          
          <p className="text-sm italic">Choose your fighter and start creating!</p>
        </div>

        <div className="max-w-2xl mx-auto my-12 p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-3xl font-bold mb-6 uppercase">Need More Resources?</h3>
          <p className="text-xl mb-4">Check out the official Media Chrome documentation:</p>
          <a href="https://media-chrome.org/docs" className="inline-block bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors">
            Media Chrome Docs
          </a>
          <p className="mt-4 text-sm">Find components, examples, and everything you need to build your player</p>
        </div>
        
        <div className="container mx-auto text-center py-8">
          <h3 className="text-3xl font-bold mb-6">When you're done...</h3>
          <p className="text-xl mb-4">Xeet your creation with <span className="font-bold text-[#EA3737]">#WildPlayerContest</span>, tag <span className="font-bold text-[#A93C71]">@MuxHQ</span>, and show the world your masterpiece</p>
          <div className="mt-6">
            <h4 className="text-2xl font-bold mb-3">Submit Your Entry</h4>
            <p className="text-lg mb-4">Fill out the official submission form to complete your contest entry:</p>
            <a href="https://forms.gle/tRS1SeCUBuia2vP49" className="inline-block bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors border-2 border-black">
              Submission Form
            </a>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto my-12 p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-3xl font-bold mb-6 uppercase text-center">PARTICIPATION OPTIONS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F7C016] p-4 border-2 border-black">
              <h4 className="font-bold text-xl mb-3">IN-PERSON @ EPIC WEB CONF</h4>
              <p>Join us live at Epic Web Conf 2025 for real-time collaboration, instant feedback, and exclusive swag!</p>
            </div>
            <div className="bg-[#A93C71] p-4 border-2 border-black">
              <h4 className="font-bold text-xl mb-3 text-white">REMOTE PARTICIPATION</h4>
              <p className="text-white">Can't make it in person? No problem! Remote participants get the same judging consideration and most prizes.</p>
            </div>
          </div>
        </div>
        
        <footer className="container mx-auto text-center py-8">
          <p className="text-gray-400 text-sm italic">be kind, rewind</p>
          <div className="mt-4">
            <p className="text-sm">Powered by <a href="https://mux.com" className="text-[#A93C71] hover:underline font-bold">Mux</a> - the video API for developers</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
