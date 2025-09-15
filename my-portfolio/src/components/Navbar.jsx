import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About Me", href: "#profile" },
    { name: "Projects", href: "#projects" },
    { name: "IT Blog", href: "#itblog" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-blue shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="#home" className="text-xl font-bold text-brand-beige">
          MyPortfolio
        </a>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition ${
                active === link.href.substring(1)
                  ? "text-brand-beige font-semibold"
                  : "text-brand-blue-2 hover:text-brand-yellow"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-brand-beige"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`transition ${
                active === link.href.substring(1)
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
