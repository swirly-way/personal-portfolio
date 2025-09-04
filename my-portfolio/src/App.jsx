import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ITBlog from "./components/ITBlog";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <ITBlog />
      <About />
      <Contact />
    </div>
  );
}
export default App;
