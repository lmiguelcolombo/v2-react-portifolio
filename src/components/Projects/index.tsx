import useRepos from "../../utils/githubApi";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  sectionId: string;
};

export default function Projects({ sectionId }: ProjectsProps) {
  const repos = useRepos();

  return (
    <section className="projects-container" id={sectionId}>
      <h1>Projects</h1>
      {repos.map((repo) => {
        const title = repo.name.split("-").join(" ");
        if (repo.name != "AdmFin")
          return (
            <ProjectCard
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
  );
}
