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
      <Fade from="var(--color-brand-yellow)" to="#003049" className="-mt-12" />

      <Profile />
      <SectionDivider label="Projects" />
      <Projects />
      <ITBlog />
      <Footer />
    </div>
  );
}

export default App;
