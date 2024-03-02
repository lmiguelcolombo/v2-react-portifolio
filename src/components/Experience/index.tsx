// import Container from "../Container";
import "./Experience.scss";

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
    },
    {
      title: "Full-Stack & BI Developer",
      company: "Academia da Web",
      startEndDates: "Jan 2020 - Jan 2024",
    },
  ];
  return (
    <div className="timeline">
      <div className="line"></div>
      <div className="milestones-wrapper">
        {milestones.map((milestone, index) => (
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
        ))}
      </div>
    </div>
  );
};
