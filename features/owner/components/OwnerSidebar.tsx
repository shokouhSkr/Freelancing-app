import { ownerNavLinks } from "@/utils/constants";
import { NavLink } from "@/features";

const OwnerSidebar = () => {
  return (
    <ul className="p-4 space-y-2">
      {ownerNavLinks.map((link) => (
        <NavLink key={link.title} {...link} />
      ))}
    </ul>
  );
};

export default OwnerSidebar;
