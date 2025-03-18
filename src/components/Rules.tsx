import HR from "./HR";
import Label from "./Label";

const Rules = () => {
    return (
        <>
            <div id="rules">
                <h2 className="text-xl md:text-5xl mt-4 mb-6 font-vcr text-plum drop-shadow-[2px_2px_0_#F26222]">Rules</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <Label>Must be functional</Label>
                        <p className="mb-8 text-2xl font-aeonik leading-relaxed">Your wild creation needs to actually work. Play, pause, seek, etc.</p>
                    </div>

                    <div>
                        <Label>Uniqueness wins</Label>
                        <p className="mb-8 text-2xl font-aeonik leading-relaxed">Show us something we've never seen before</p>
                    </div>

                    <div>
                        <Label>Creativity counts</Label>
                        <p className="mb-8 text-2xl font-aeonik leading-relaxed">The weirder, the better. Make us laugh!</p>
                    </div>

                    <div>
                        <Label>Go wild</Label>
                        <p className="mb-8 text-2xl font-aeonik leading-relaxed">Ugly is fine! Unconventional is encouraged!</p>
                    </div>
                </div>
                <HR />
            </div>
        </>
    );
};

export default Rules;
