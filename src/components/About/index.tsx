import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../Container";
import "./About.scss";

export default function About({ id }: { id: string }) {
  const icons = [
    { id: 1, to: "https://instagram.com/colomboluismiguel", icon: faInstagram },
    { id: 2, to: "https://github.com/lmiguelcolombo", icon: faGithub },
    {
      id: 3,
      to: "https://linkedin.com/in/luis-miguel-colombo",
      icon: faLinkedin,
    },
  ];

  return (
    <Container>
      <section className="about-container" id={id}>
        <div className="image-social">
          <div className="profile-img"></div>
          <ul className="social-media">
            {icons.map((icon) => {
              return (
                <li key={icon.id}>
                  <a
                    href={icon.to}
                    target="_blank"
                    className="social-media-icon"
                  >
                    <FontAwesomeIcon icon={icon.icon} size="3x" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-box">
          <h2 className="section-title">Who am I?</h2>
          <p className="about-description">
            I'm a ReactJS-focused developer with 4 years of professional
            experience in JavaScript and TypeScript. I have a strong passion for
            full-stack (f/e) development! 💻
            <br />
            <br />
            Currently, I am an integral part of a dynamic international team
            consisting of 8 talented individuals. My expertise lies in finding
            innovative solutions to complex problems, making me the go-to person
            on the team. 💡
            <br />
            <br />
            Additionaly, my thirst for knowledge has led me to explore different
            seas. I am constantly seeking new challenges and opportunities for
            continuous learning, growth, and improvement. Moreover, I thrive in
            collaborative team environments and am eager to contribute my
            expertise to a top-notch team! 🚀
          </p>
        </div>
      </section>
    </Container>
  );
}
