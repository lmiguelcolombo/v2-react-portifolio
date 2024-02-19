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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            commodi quisquam. In, officiis. Amet sunt quis repellat
            exercitationem iusto laudantium voluptatem numquam labore,
            perferendis at! Provident laborum rem amet quisquam. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Nobis, commodi
            quisquam. In, officiis. Amet sunt quis repellat exercitationem iusto
            laudantium voluptatem numquam labore, perferendis at! Provident
            laborum rem amet quisquam.
          </p>
        </div>
      </section>
    </Container>
  );
}
