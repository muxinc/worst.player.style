const Footer = () => {
  return (
    <footer className="container mx-auto text-center py-8">
      <p className="text-gray-400 text-sm italic">be kind, rewind</p>
      <div className="mt-4">
        <p className="text-sm">
          Powered by{" "}
          <a href="https://mux.com" className="text-[#A93C71] hover:underline font-bold">
            Mux
          </a>{" "}
          - the video API for developers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
