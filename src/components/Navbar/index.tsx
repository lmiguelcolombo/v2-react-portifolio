import Container from "../Container";
import "./Navbar.scss";

type NavbarProps = {
  links: { id: string; to: string; label: string }[];
};

export default function Navbar({ links }: NavbarProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <div className="nav-container">
        <button className="button-to-top" onClick={() => scrollToTop()}>
          <h1>LC</h1>
        </button>
        <div className="nav-items-wrapper">
          {links.map((link) => {
            return (
              <a key={link.id} href={link.to} className="nav-item">
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
