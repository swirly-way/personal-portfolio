import heroImage from "../assets/heroImage.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[80dvh] flex items-center bg-brand-yellow px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl">
        <div className="flex-1 max-w-2xl space-y-6 text-center md:text-left ml-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            HI, I’M ALEX <br />
            <span className="text-blue-600">
              I BUILD APPS <br />
            </span>
            &<span className="text-green-600"> FIX SYSTEMS</span>.
          </h1>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:pl-[10%]">
          <img
            src={heroImage}
            alt="Hero visual"
            className="w-72 md:w-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
