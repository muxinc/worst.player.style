import { useState, useEffect } from "react";

const Menu = () => {
    const [activeSection, setActiveSection] = useState("about");

    const menuItems = [
        { id: "about", label: "About" },
        { id: "rules", label: "Rules" },
        { id: "judges", label: "Judges" },
        { id: "prizes", label: "Prizes" },
        { id: "start", label: "Get Started" },
        { id: "submit", label: "Submit" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            threshold: 0.5
        });

        menuItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="sticky top-0 md:top-6 bg-[#0000EC] p-5 border-2 border-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] h-fit z-10">
            <h2 className="font-vcr text-base text-white uppercase leading-none inline-flex align-self-start">------ MENU ------</h2>
            <ul className="">
                {menuItems.map((item) => (
                    <li key={item.id} className="">
                        <a
                            href={`#${item.id}`}
                            className={`block font-vcr text-base px-0 py-0 transition-all duration-300 uppercase leading-none inline-flex align-self-start ${activeSection === item.id
                                    ? "bg-white text-vhs-blue"
                                    : "text-white hover:bg-black/20"
                                }`}
                            onClick={() => setActiveSection(item.id)}
                        >
                            {item.label}
                            <span className={`-translate-y-[2px] ml-1 transition-opacity duration-300 ${activeSection === item.id ? 'opacity-100' : 'opacity-0'}`}>
                                {" ▶"}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
