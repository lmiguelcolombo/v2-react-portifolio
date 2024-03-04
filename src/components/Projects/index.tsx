import useRepos from "../../utils/githubApi";
import Container from "../Container";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

type ProjectsProps = {
  sectionId: string;
};

export default function Projects({ sectionId }: ProjectsProps) {
  const repos = useRepos();

  return (
    <Container>
      <section className="projects-container" id={sectionId}>
        <h1 className="section-title">Projects</h1>
        {repos.map((repo, index) => {
          const title = repo.name
            .split("-")
            .map((word) => {
              return word[0].toUpperCase() + word.substring(1);
            })
            .join(" ");

          if (repo.name != "AdmFin")
            return (
              <ProjectCard
                className={`${index % 2 === 0 && "reverse"}`}
                id={repo.id}
                image={`/src/assets/images/${repo.name}.webp`}
                imageAlt={repo.name}
                linkToGithub={repo.html_url}
                title={title}
                description={repo.description}
                liveProject={`https://lmiguelcolombo.github.io/${repo.name}`}
              />
            );
        })}
      </section>
    </Container>
  );
}
