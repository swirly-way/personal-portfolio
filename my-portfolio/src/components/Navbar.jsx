import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-6 fixed top-0 w-full z-50">
      <a href="#hero" className="hover:text-blue-500">
        Home
      </a>
      <a href="#projects" className="hover:text-blue-500">
        Projects
      </a>
      <a href="#it" className="hover:text-blue-500">
        IT Blog
      </a>
      <a href="#contact" className="hover:text-blue-500">
        Contact
      </a>
    </nav>
  );
}
