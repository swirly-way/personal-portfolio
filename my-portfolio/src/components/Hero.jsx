import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.svg";
import backgroundOverlay from "../assets/hero1-background.png";

const MotionImg = motion.img;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[80dvh] flex items-center bg-brand-yellow px-6"
    >
      <div
        className="
    absolute inset-0 
    bg-cover bg-center
    opacity-5 z-0 pointer-events-none
  "
        style={{
          backgroundImage: `url(${backgroundOverlay})`,
          backgroundPosition: "center 60%",
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-yellow to-transparent pointer-events-none z-10" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl space-y-8 md:space-y-0 relative z-10">
        <div className="flex-1 max-w-xl space-y-6 text-center md:text-left mx-auto md:mx-0 md:pl-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            HI, I'M ALEX
          </h1>
          <p className="text-lg text-gray-700">
            Developer • IT Support • Problem Solver
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              My Dev Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
            >
              My IT Work
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:pl-[10%] mt-6 md:mt-0">
          <div className="relative w-64 sm:w-72 md:w-96">
            <MotionImg
              src={heroImage}
              alt="Hero visual"
              className="w-full object-contain relative z-10"
            />

            <MotionImg
              src={heroImage}
              alt=""
              className="w-full object-contain absolute top-0 right-0 z-20 opacity-5"
              style={{ filter: "drop-shadow(-3px 0 red)" }}
              animate={{ x: [-2, 2, -1, 1, 0], opacity: [0, 1, 0.3, 1, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5.5,
              }}
            />
            <MotionImg
              src={heroImage}
              alt=""
              className="w-full object-contain absolute top-0 left-0 z-30 opacity-5"
              style={{ filter: "drop-shadow(3px 0 cyan)" }}
              animate={{ x: [2, -2, 1, -1, 0], opacity: [0.5, 0, 1, 0.2, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5.5,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
