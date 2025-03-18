const Submit = () => {
  return (
    <div id="submit" className="max-w-2xl mx-auto my-12">
        <h2 className="text-xl md:text-5xl mt-4 mb-6 font-vcr text-plum drop-shadow-[2px_2px_0_#F26222]">Share and Submit</h2>
        <p className="text-xl mb-4">Ready to show off your creation? Follow these steps to share and submit your entry.</p>

      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-6">When you're done...</h3>
        <p className="text-xl mb-4">
          Share your creation on X with{" "}
          <span className="font-bold text-[#EA3737]">#WildPlayerContest</span>, tag{" "}
          <span className="font-bold text-[#A93C71]">@MuxHQ</span>, and show the world your masterpiece
        </p>
      </div>

      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h4 className="text-2xl font-bold mb-6 text-center">Submit Your Entry</h4>
        <p className="text-lg mb-6 text-center">
          Fill out the official submission form to complete your contest entry:
        </p>
        <div className="text-center">
          <a
            href="https://forms.gle/tRS1SeCUBuia2vP49"
            className="inline-block bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors border-2 border-black"
          >
            Submit Your Creation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Submit;
