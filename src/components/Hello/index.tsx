import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function HelloBanner() {
  const icons = [
    {
      id: 1,
      to: "https://linkedin.com/in/luis-miguel-colombo",
      icon: faLinkedin,
    },
    { id: 2, to: "https://github.com/lmiguelcolombo", icon: faGithub },
    { id: 3, to: "mailto:lmiguelcolombo@gmail.com", icon: faEnvelope },
    { id: 4, to: "https://instagram.com/colomboluismiguel", icon: faInstagram },
  ];

  return (
    <div className="container" id="hello">
      <main className="presentation">
        <h3>Hi there, I'm</h3>
        <h2>Luís M. Colombo</h2>
        <h3 className="fira-mono">A software engineer 💻</h3>
      </main>
    </div>
  );
}
