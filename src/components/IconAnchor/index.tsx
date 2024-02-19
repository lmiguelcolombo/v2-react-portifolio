import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconAnchor.scss";

type IconAnchorProps = {
  to: string;
  icon: IconDefinition;
};

export default function IconAnchor({ to, icon }: IconAnchorProps) {
  return (
    <a href={to} target="_blank">
      <FontAwesomeIcon icon={icon} size="3x" className="icon-anchor" />
    </a>
  );
}
