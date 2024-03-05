import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Experience.scss";
import { faCode } from "@fortawesome/free-solid-svg-icons";

type ExperienceProps = {
  sectionId: string;
};

export default function Experience({ sectionId }: ExperienceProps) {
  return (
    <>
      <section className="experience-container" id={sectionId}>
        <h1 className="section-title">Experience</h1>
        <Timeline />
      </section>
    </>
  );
}

const Timeline = () => {
  const milestones = [
    {
      title: "FrontEnd Developer",
      company: "Nexalure",
      startEndDates: "Jan 2024 - Present",
      description: [
        "Proficiently utilized a tech stack based on React, Redux, TypeScript, JavaScript, Next, Node, SCSS, and Git to deliver high-quality applications.",
        "Have shown leadership by taking on responsibilities, and being available to help and guide teammates, especially in Git and in the application's tech stack.",
        "Actively engaged in code reviews and pair-programming within an international team of 8 people, sharing valuable thoughts and different ways to solve problems based on design principles, React core concepts, and UX principles.",
        "Became actively involved in the Agile environment, task estimations, sprint planning, standup meetings, and sprint retrospectives.",
        "Facilitated collaborative problem-solving in a large team setting, effectively addressing issues through clear and specific communication strategies.",
      ],
    },
    {
      title: "Full-Stack & BI Developer",
      company: "Academia da Web",
      startEndDates: "Jan 2020 - Jan 2024",
      description: [
        "Built ReactJS Single Page Applications (SPAs) using JavaScript, TypeScript, CSS, and Git for code versioning.",
        "Collaborated with the UI/UX design team, building responsive and modern pages with Figma.",
        "Utilized, with expertise, a tech stack that relied on Laravel (PHP), Bootstrap, MySQL, Docker, Git, and GitHub Actions to deploy, delivering a highly qualified application of charts and dashboards.",
        "Developed Power BI dashboards importing data from other datasets, integrating with PowerPoint's designs.",
      ],
    },
  ];
  return (
    <div className="timeline">
      <div className="line"></div>
      <div className="milestones-wrapper">
        {milestones.map((milestone, index) => (
          <div className="milestone-with-li">
            <Milestone milestone={milestone} index={index} />
            <ol
              className={milestone.company.toLowerCase().split(" ").join("-")}
            >
              {milestone.description?.map((item, index) => (
                <li key={index}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCode}
                      fontSize="20px"
                      color="#4d93a9"
                    />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

const Milestone = ({
  milestone,
  index,
}: {
  milestone: { title: string; company: string; startEndDates: string };
  index: number;
}) => {
  return (
    <div key={index} className="milestone">
      <div className="horizontal-line"></div>
      <div className="circle"></div>
      <div className="content">
        <p className="profession-title">{milestone.title}</p>
        <p>
          @ <span className="company">{milestone.company}</span>
        </p>
        <p className="duration">{milestone.startEndDates}</p>
      </div>
    </div>
  );
};
