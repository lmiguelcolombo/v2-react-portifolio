import "./Container.scss";
export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="narrow-container">{children}</div>;
}
