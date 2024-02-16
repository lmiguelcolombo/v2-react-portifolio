import "./Navbar.scss";

type NavbarProps = {
  links: { id: string; to: string; label: string }[];
};

export default function Navbar({ links }: NavbarProps) {
  return (
    <div className="nav-container">
      <h1>
        <a href="#hello">LC</a>
      </h1>
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
  );
}
