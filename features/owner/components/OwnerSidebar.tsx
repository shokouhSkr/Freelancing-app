import { navLinks } from "@/utils/constants";
import { NavLink } from "../..";

const OwnerSidebar = () => {
  return (
    <ul className="p-4 space-y-2">
      {navLinks.map((link) => (
        <NavLink key={link.title} {...link} />
      ))}
    </ul>
  );
};

export default OwnerSidebar;
