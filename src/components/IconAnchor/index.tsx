import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconAnchorProps = {
  to: string;
  icon: IconDefinition;
  size: SizeProp;
};

export default function IconAnchor({ to, icon, size }: IconAnchorProps) {
  return (
    <a href={to} target="_blank">
      <FontAwesomeIcon icon={icon} size={size} className="icon-anchor" />
    </a>
  );
}
