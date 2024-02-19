import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Container from "../Container";
import "./Hello.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HelloProps = {
  id: string;
  to: string;
};

export default function HelloBanner({ id, to }: HelloProps) {
  return (
    <Container>
      <div className="hello-container" id={id}>
        <main className="presentation">
          <h3>
            Hi there <span className="waving-hand">👋🏼</span>, I'm
          </h3>
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
