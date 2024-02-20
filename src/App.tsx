import "./App.scss";
import About from "./components/About";
import HelloBanner from "./components/Hello";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const links = [
    { id: "about-link", to: "#about", label: "About" },
    { id: "experience-link", to: "#experience", label: "Experience" },
    { id: "projects-link", to: "#projects", label: "Projects" },
    { id: "contact-link", to: "#contact", label: "Contact" },
  ];

  return (
    <>
      <Navbar links={links} />
      <HelloBanner id="hello" to="#about" />
      <About id="about" />
      <Projects sectionId="projects" />
    </>
  );
}

export default App;
