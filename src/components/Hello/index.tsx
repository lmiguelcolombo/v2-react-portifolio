import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Container from "../Container";
import "./Hello.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HelloProps = {
  id: string;
  to: string;
};

export default function HelloBanner({ id, to }: HelloProps) {
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
    <Container>
      <div className="hello-container" id={id}>
        <main className="presentation">
          <h3>Hi there, I'm</h3>
          <h1>Luís M. Colombo</h1>
          <h3 className="fira-mono">A software engineer 💻</h3>
        </main>
        <button className="btn-filled-blue">
          <a href={to} className="a-text-white">
            Take a look <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </button>
      </div>
    </Container>
  );
}
