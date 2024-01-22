"use client";

import { usePathname } from "next/navigation";
import { AdminSidebar, FreelancerSidebar, OwnerSidebar } from "@/features";

const Sidebar = () => {
  const currentPath = usePathname();

  const dynamicSidebar = () => {
    if (currentPath.startsWith("/owner")) return <OwnerSidebar />;
    if (currentPath.startsWith("/freelancer")) return <FreelancerSidebar />;
    if (currentPath.startsWith("/admin")) return <AdminSidebar />;

    return null;
  };

  return (
    <aside className="bg-secondary-0 border-l border-secondary-200 row-start-1 row-span-2">
      <nav>{dynamicSidebar()}</nav>
    </aside>
  );
};

export default Sidebar;
