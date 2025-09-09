export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center text-sm">
      <p>
        © 2025 Your Name •
        <a
          href="https://github.com/yourusername"
          className="hover:text-white mx-2"
        >
          GitHub
        </a>{" "}
        •
        <a
          href="https://linkedin.com/in/yourusername"
          className="hover:text-white mx-2"
        >
          LinkedIn
        </a>{" "}
        •
        <a
          href="mailto:youremail@example.com"
          className="hover:text-white mx-2"
        >
          Email
        </a>
      </p>
    </footer>
  );
}
