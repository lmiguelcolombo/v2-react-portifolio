import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import IconAnchor from "../IconAnchor";

type ProjectCardProps = {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  linkToGithub: string;
  liveProject: string;
};

export default function ProjectCard({
  id,
  image,
  imageAlt,
  title,
  description,
  linkToGithub,
  liveProject,
}: ProjectCardProps) {
  return (
    <div className="project-card" key={id}>
      <div className="image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="description">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="project-navigation-links">
          <IconAnchor icon={faGithub} to={linkToGithub} />
          <IconAnchor icon={faArrowUpRightFromSquare} to={liveProject} />
        </div>
      </div>
    </div>
  );
}
