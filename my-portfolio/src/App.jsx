import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ITBlog from "./components/ITBlog";
import Footer from "./components/Footer";
import Fade from "./components/Fade";

function App() {
  return (
    <div className="font-sans relative">
      <Navbar />

      <Hero />
      <Fade from="var(--color-brand-yellow)" to="#003049" className="-mt-12" />

      <Profile />
      <Projects />
      <ITBlog />
      <Footer />
    </div>
  );
}

export default App;
