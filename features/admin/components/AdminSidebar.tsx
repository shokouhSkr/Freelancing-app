import { NavLink } from "@/features";
import { adminNavLinks } from "@/utils/constants";

const AdminSidebar = () => {
  return (
    <ul className="p-4 space-y-2">
      {adminNavLinks.map((link) => (
        <NavLink key={link.title} {...link} />
      ))}
    </ul>
  );
};

export default AdminSidebar;
