import { navLinks } from "@/utils/constants";
import NavLink from "./NavLink";

const Sidebar = () => {
  return (
    <aside className="bg-secondary-0 border-l border-secondary-200 hidden md:block row-start-1 row-span-2">
      <nav>
        <ul className="p-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink key={link.title} {...link} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
