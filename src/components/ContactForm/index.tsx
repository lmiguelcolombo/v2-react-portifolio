import {
  IconDefinition,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import ContactForm from './Form';
import './ContactForm.scss';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import IconAnchor from '../IconAnchor';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export default function Contact({ sectionId }: { sectionId: string }) {
  const personalInfo = [
    {
      link: 'https://maps.app.goo.gl/PAibJGS2Eyx6Cj4A6',
      icon: faMapMarkedAlt,
      size: '2x' as SizeProp,
      text: 'Canela, RS, Brazil',
    },
    {
      link: 'https://github.com/lmiguelcolombo',
      icon: faGithub,
      size: '2x' as SizeProp,
      text: '@lmiguelcolombo',
    },
    {
      link: 'https://linkedin.com/in/luis-miguel-colombo',
      icon: faLinkedin,
      size: '2x' as SizeProp,
      text: '/luis-miguel-colombo',
    },
  ];

  return (
    <section id={sectionId} className="contact-container">
      <h1 className="section-title">Contact</h1>
      <article className="contact-wrapper">
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            deleniti cumque. Optio eius ipsam dolore tenetur maiores officia
            quod nemo eum inventore, debitis illum aliquid tempora laudantium
            nostrum facilis? Repellat?
          </p>
          <div className="personal-info">
            {personalInfo.map((item, index) => (
              <IconWithText
                key={index}
                link={item.link}
                icon={item.icon}
                size={item.size}
                text={item.text}
              />
            ))}
          </div>
        </div>
        <ContactForm />
      </article>
    </section>
  );
}

function IconWithText({
  link,
  icon,
  size,
  text,
}: {
  link: string;
  icon: IconDefinition;
  size: SizeProp;
  text: string;
}) {
  return (
    <div className="icon-with-text">
      <IconAnchor to={link} icon={icon} size={size} />
      <p>{text}</p>
    </div>
  );
}
