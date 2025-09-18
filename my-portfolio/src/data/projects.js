import testImage from "../assets/test1.png";
import rockPaperScissors from "../assets/projects/cards/rps.png";
import cyberBlog from "../assets/projects/cards/blog-project.png";

export const projects = [
  {
    title: "Rock, Paper, Scissors",
    description:
      "A browser-based Rock-Paper-Scissors game built with vanilla JavaScript, featuring DOM manipulation, real-time score tracking, and interactive gameplay.",
    tech: ["JavaScript", "CSS", "DOM"],
    demo: "https://swirly-way.github.io/rock-paper-scissors/",
    github: "https://github.com/swirly-way/rock-paper-scissors",
    image: rockPaperScissors,
  },
  {
    title: "Cybersecurity Blog",
    subtitle: "Individual project – School of Code Cybersecurity Challenge.",
    description:
      "A single-page TypeScript + Vite blog summarizing key cybersecurity concepts for developers. Clean, responsive UI with Chakra UI and React Icons. It features organized content on basic security practices (authentication, encryption, common vulnerabilities).",
    tech: ["TypeScript", "React", "Chakra UI", "Vercel for Deployment"],
    demo: "https://cybersecurity-blog-concept.vercel.app/",
    github: "https://github.com/swirly-way/cybersecurity-blog-concept",
    image: cyberBlog,
  },
  {
    title: "Task Manager",
    description: "A simple CRUD app to manage daily tasks and to-dos.",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
    image: testImage,
  },
  {
    title: "Dev Toolbox",
    description:
      "A collection of small utilities like a password generator and JSON formatter.",
    tech: ["React"],
    demo: "#",
    github: "#",
    image: testImage,
  },
  {
    title: "Dev Toolbox",
    description:
      "A collection of small utilities like a password generator and JSON formatter.",
    tech: ["React"],
    demo: "#",
    github: "#",
    image: testImage,
  },
];
