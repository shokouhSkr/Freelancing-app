import { NavLink } from "@/features";
import { freelancerNavLinks } from "@/utils/constants";

const FreelancerSidebar = () => {
  return (
    <ul className="p-4 space-y-2">
      {freelancerNavLinks.map((link) => (
        <NavLink key={link.title} {...link} />
      ))}
    </ul>
  );
};

export default FreelancerSidebar;
