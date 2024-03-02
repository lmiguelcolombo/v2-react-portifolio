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
  className: string;
};

export default function ProjectCard({
  id,
  image,
  imageAlt,
  title,
  description,
  linkToGithub,
  liveProject,
  className,
}: ProjectCardProps) {
  return (
    <div className={`project-card ${className}`} key={id}>
      <div className={`image ${className}`}>
        <img src={image} alt={imageAlt} />
      </div>
      <div className={`description ${className}`}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="project-navigation-links">
          <IconAnchor icon={faGithub} size="3x" to={linkToGithub} />
          <IconAnchor
            icon={faArrowUpRightFromSquare}
            size="3x"
            to={liveProject}
          />
        </div>
      </div>
    </div>
  );
}
