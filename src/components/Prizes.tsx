import Label from "./Label";
const Prizes = () => {
    return (
        <div id="prizes" className="my-12">
            <h2 className="text-4xl md:text-5xl mt-4 mb-8 font-vcr text-plum drop-shadow-[2px_2px_0_#F26222]">Prizes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div className="bg-plum p-5 border-2 border-black flex items-center justify-center rounded-sm h-72">
                        <div className="relative">
                            <img src="/images/peak-design-bag.png" alt="Backpack" width={160} height={225} className="absolute rotate-10" />
                            <img src="/images/peak-design-bag.png" alt="Backpack" width={160} height={225} className="relative -left-2 -top-2 -rotate-4" />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl mt-4 mb-6 font-vcr text-plum">Winning submission</h2>
                    <Label>TWO MUX PEAK DESIGN BACKPACKS</Label>
                    <p className="mb-8 text-2xl font-aeonik leading-relaxed">The best way to carry your laptop and a few snacks</p>
                </div>

                <div>
                    <div className="bg-radred p-5 border-2 border-black flex items-center justify-center rounded-sm h-72">
                        <div className="relative">
                            <img src="/images/sonos.png" alt="Sonos speaker" width={243} height={90} />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl mt-4 mb-6 font-vcr text-plum">Second place</h2>
                    <Label>Mux Sonos speaker</Label>
                    <p className="mb-8 text-2xl font-aeonik leading-relaxed">Fill your space with sound as crisp as your code</p>
                </div>

                <div>
                    <div className="bg-orangish p-0 border-2 border-black flex items-end justify-end rounded-sm h-72">
                        <div className="relative">
                            <img src="/images/Shirt.png" alt="Shirt" width={329} height={243} />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl mt-4 mb-6 font-vcr text-plum">IRL Entrants</h2>
                    <Label>Media Chrome Thrift-tee</Label>
                    <p className="mb-8 text-2xl font-aeonik leading-relaxed">Show up in person and walk away with some sick swag</p>
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
