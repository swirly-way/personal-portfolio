import { useState, useRef } from "react";
import { projects } from "../data/projects";
// import sideBarProject from "../assets/projects/bg-img/side-project.png";
export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const handleToggle = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 bg-brand-beige"
    >
      {/* <img
        src={sideBarProject}
        alt=""
        className="absolute top-0 -left-8 w-auto h-100 object-contain pointer-events-none z-0"
      /> */}

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-500 ease-in-out ${
            showAll
              ? "max-h-[4000px] md:max-h-[2000px]"
              : "max-h-[2000px] md:max-h-[1000px]"
          }`}
        >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 border-6 border-brand-blue rounded-r-4xl shadow-md overflow-hidden transform hover:scale-[1.02] transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <h4 className="text-l font-semibold mb-2">
                  {project.subtitle}
                </h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-200 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={handleToggle}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
