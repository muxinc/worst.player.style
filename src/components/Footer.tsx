import Link from "./Link";
import BeKindRewind from "../assets/bekindrewind.svg";

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col items-center justify-center py-8">
        <p className="text-2xl font-aeonik">
          Powered by{" "}
          <Link href="https://mux.com">
            Mux
          </Link>{" "}
          - the video API for developers
        </p>
        <img src={BeKindRewind} alt="Be Kind Rewind" className="w-24 h-24 animate-spin" />
    </footer>
  );
};

export default Footer;
