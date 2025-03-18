import HR from "./HR";

const Start = () => {
  return (
    <>
    <div id="start" className="max-w-2xl mx-auto my-12 p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-xl md:text-5xl mt-4 mb-6 font-vcr text-plum drop-shadow-[2px_2px_0_#F26222]">Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F7C016] p-4 border-2 border-black">
          <h3 className="font-bold text-xl mb-4">1. Fork the Template</h3>
          <p className="mb-4">Choose your preferred starter:</p>
          <div className="space-y-2">
            <a href="#" className="block bg-black text-white px-4 py-2 text-center hover:bg-gray-800 transition-colors">
              HTML/Web Components Template
            </a>
            <a href="#" className="block bg-black text-white px-4 py-2 text-center hover:bg-gray-800 transition-colors">
              React Template
            </a>
          </div>
        </div>

        <div className="bg-[#F26222] p-4 border-2 border-black">
          <h3 className="font-bold text-xl mb-4">2. Build Something Wild</h3>
          <p>Use Media Chrome components to create your unique video player experience. Think outside the box!</p>
        </div>

        <div className="bg-[#EA3737] p-4 border-2 border-black">
          <h3 className="font-bold text-xl mb-4">3. Test & Polish</h3>
          <p>Make sure your player works across different devices and browsers. Add those finishing touches that make it special.</p>
        </div>

        <div className="bg-[#A93C71] p-4 border-2 border-black">
          <h3 className="font-bold text-xl mb-4">4. Submit Your Creation</h3>
          <p className="mb-4">Ready to show the world? Submit your project before the deadline!</p>
          <a href="#submit" className="inline-block bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors">
            Submit Project
          </a>
        </div>
      </div>

      <div className="mt-8 p-4 bg-black text-white">
        <h4 className="font-bold mb-2">Need Help?</h4>
        <p>Check out the <a href="https://media-chrome.org/docs" className="text-[#F7C016] hover:underline">Media Chrome documentation</a> or join our <a href="#" className="text-[#F7C016] hover:underline">Discord community</a>.</p>
      </div>
    </div>
    <HR />
    </>
  );
};

export default Start;
