import Label from "./Label";
const Prizes = () => {
    return (
        <div id="prizes" className="my-12">
            <h2 className="text-4xl md:text-5xl mt-4 mb-8 font-vcr text-plum drop-shadow-[2px_2px_0_#F26222]">Prizes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div className="bg-black p-5 border-2 border-black flex items-center justify-center rounded-sm h-72">
                        <div className="relative">
                            <img src="/images/vercel-icon-dark.png" alt="Backpack" width={160} height={225} className="" />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl mt-4 mb-6 font-vcr text-plum">Winning submission</h2>
                    <Label>TRIP TO VERCEL SHIP</Label>
                    <p className="mb-8 text-2xl font-aeonik leading-relaxed">Fly to New York City and attend the Vercel conference</p>
                </div>

                <div>
                    <div className="bg-radred p-5 border-2 border-black flex items-center justify-center rounded-sm h-72">
                        <div className="relative w-full h-72 overflow-hidden">
                                <img src="/images/elgato-stream-deck.png" alt="Elgato" width={400} height={409} className="absolute top-2 right-0 w-26" />
                                <img src="/images/elgato-light.png" alt="Elgato" width={1218} height={1712} className="absolute -bottom-2 left-6 w-20" />
                                <img src="/images/elgato-light.png" alt="Elgato" width={1218} height={1712} className="absolute -bottom-4 left-16 w-20" />
                                <img src="/images/elgato-prompter.png" alt="Elgato" width={400} height={352} className="absolute top-6 left-0 w-48" />
                                <img src="/images/elgato-mic.png" alt="Elgato" width={200} height={400} className="absolute right-4 bottom-0 w-20" />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl mt-4 mb-6 font-vcr text-plum">Runner up</h2>
                    <Label>Elgato streaming bundle</Label>
                    <p className="mb-8 text-2xl font-aeonik leading-relaxed">Prompter, 2x Key Light MK.2, Stream Deck, and Wave:3 mic.</p>
                </div>

                <div>
                    <div className="bg-orangish p-0 border-2 border-black flex items-end justify-end rounded-sm h-72">
                        <div className="relative">
                            <img src="/images/Shirt.png" alt="Shirt" width={329} height={243} />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl mt-4 mb-6 font-vcr text-plum">All participants</h2>
                    <Label>Media Chrome Thrift-tee</Label>
                    <p className="mb-8 text-2xl font-aeonik leading-relaxed">Retro vibes guaranteed to help you learn to write COBOL</p>
                </div>

                <div>
                    <div className="bg-yella p-5 border-2 border-black flex items-center justify-center rounded-sm h-72">
                        <div className="relative">
                            <img src="/images/camguy.png" alt="Mux Bux" width={184} height={206} />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl mt-4 mb-6 font-vcr text-plum">All participants</h2>
                    <Label>$100 MUX credit</Label>
                    <p className="mb-8 text-2xl font-aeonik leading-relaxed">Maybe you know him, his name is Abraham. Get Mux bucks, on us.</p>
                </div>
            </div>
        </div>
    );
};

export default Prizes;
