import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Mail from "lucide-react/dist/esm/icons/mail";

export default function Profile() {
  return (
    <section id="profile" className=" bg-[#003049] py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I’m a career switcher with a background outside tech, now focused on
            web development and IT support. I enjoy solving problems, learning
            quickly, and building clean, functional projects.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In short: I build things and I fix things.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:youremail@example.com"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Mail className="w-5 h-5 mr-2" /> youremail@example.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Github className="w-5 h-5 mr-2" /> github.com/yourusername
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Linkedin className="w-5 h-5 mr-2" />{" "}
                linkedin.com/in/yourusername
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
