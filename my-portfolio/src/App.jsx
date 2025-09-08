import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ITBlog from "./components/ITBlog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Profile />
      <Projects />
      <ITBlog />
      <Footer />
    </div>
  );
}
export default App;
