// import Container from "../Container";
import { useRef } from "react";
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
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
      ],
    },
    {
      title: "Full-Stack & BI Developer",
      company: "Academia da Web",
      startEndDates: "Jan 2020 - Jan 2024",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio doloremque enim consectetur porro aliquid soluta perspiciatis reprehenderit numquam placeat aspernatur, rerum perferendis quo, eaque, expedita quae eius quidem dolorum!",
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
            <ol>
              {milestone.description?.map((item, index) => (
                <li key={index}>
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
