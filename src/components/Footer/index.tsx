import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

export default function Footer({ sectionId }: { sectionId: string }) {
  const year = new Date().getFullYear();

  return (
    <section id={sectionId} className="footer-container">
      <p className="made-with">
        Made with <FontAwesomeIcon icon={faLaptopCode} className="icon" /> by{' '}
        <span>Luis</span>{' '}
      </p>
      <p className="copyright">&#169; {year}. All rights reserved.</p>
    </section>
  );
}
