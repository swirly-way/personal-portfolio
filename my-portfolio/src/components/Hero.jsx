export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh]
 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black px-4 overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 relative z-10">
        Hi, I’m{" "}
        <span className="text-blue-600 dark:text-blue-400">Your Name</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl relative z-10">
        Frontend Developer 💻 | IT Troubleshooter 🛠️ | Passion for sleek, usable
        interfaces
      </p>

      <div className="flex flex-col sm:flex-row gap-4 relative z-10">
        <a
          href="#projects"
          className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-700 transition font-medium"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition font-medium"
        >
          Contact Me
        </a>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-400 z-10">
        <a href="#projects">↓</a>
      </div>
    </section>
  );
}
