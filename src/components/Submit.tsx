import Label from "./Label";
import Link from "./Link";
import HR from "./HR";

const Submit = () => {
    return (
        <>
            <div id="submit" className="w-full my-12 bg-plum p-6 border-4 border-black text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-xl md:text-5xl mt-4 mb-6 font-vcr text-white">Submit your entry</h2>
                <p className="mb-8 text-2xl font-aeonik leading-relaxed text-white">Fill out the official submission form to complete your contest entry:</p>

                <a
                    href="https://forms.gle/7aKhquYNduXTaJrE8"
                    className="inline-block text-black bg-yella uppercase w-full px-20 py-4 text-base font-vcr border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all mb-12"
                >
                    Submit your creation
                </a>
            </div>
            <div>
                <Label>Show it off</Label>
                <p className="mt-4 mb-8 text-2xl font-aeonik">
                    Xeet your creation on TwiX, tag{" "}
                    <Link href="https://x.com/MuxHQ">@MuxHQ</Link>, and show the world your masterpiece
                </p>
            </div>
            <HR />
        </>
    );
};

export default Submit;
