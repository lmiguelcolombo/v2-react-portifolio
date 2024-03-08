import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.scss";

export default function Skills() {
  const skills = [
    {
      title: "Languages",
      list: ["Javascript", "Typescript", "PHP", "SCSS/CSS", "HTML5"],
    },
    {
      title: "Technologies",
      list: [
        "React.js",
        "React Native",
        "Redux",
        "Next.js",
        "Node.js",
        "REST APIs",
        "Laravel",
        "Tailwind CSS",
        "Bootstrap",
        "jQuery",
      ],
    },
    {
      title: "Database",
      list: ["MySQL", "SQL", "MongoDB"],
    },
    {
      title: "Tools",
      list: [
        "Git + Github",
        "Figma",
        "Agile Methodologies",
        "Power BI + PowerPoint",
        "Chrome Dev Tools",
      ],
    },
  ];

  return (
    <>
      <section className="resume-container">
        <h1 className="section-title">Resume</h1>
        <a href="/src/assets/resume.pdf" target="_blank">
          Download CV
        </a>
      </section>
      <section className="skills-container">
        <h1 className="section-title">Technical Skills</h1>
        <div className="skill-set">
          {skills.map((skill, index) => (
            <SpecificSkills title={skill.title} list={skill.list} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

function SpecificSkills({ title, list }: { title: string; list: string[] }) {
  return (
    <article className={`skill ${title.toLowerCase()}`}>
      <h3 className="fira-mono skill-title">{`${title} {`}</h3>
      <ol className="">
        {list.map((skill, index) => (
          <li key={index}>
            <span>
              <FontAwesomeIcon icon={faCode} fontSize="20px" color="#4d93a9" />
            </span>
            <p>{skill}</p>
          </li>
        ))}
      </ol>
      <h3 className="fira-mono skill-title">{`}`}</h3>
    </article>
  );
}
