import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ITBlog from "./components/ITBlog";
import Footer from "./components/Footer";
import Fade from "./components/Fade";
import SectionDivider from "./components/SectionDivider";

function App() {
  return (
    <div className="font-sans relative">
      <Navbar />

      <Hero />

      <Profile />
      <SectionDivider
        label="Projects"
        className="fill-brand-blue"
        bgClass="bg-brand-beige"
        textColor="text-white"
      />
      <Projects />
      <SectionDivider
        label="IT Blog"
        className="fill-brand-beige"
        bgClass="bg-brand-blue"
        textColor="text-black"
      />
      <ITBlog />
      <Footer />
    </div>
  );
}

export default App;
