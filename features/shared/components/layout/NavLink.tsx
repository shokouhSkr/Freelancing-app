"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  title,
  path,
  icon,
}: {
  title: string;
  path: string;
  icon: React.ReactElement;
}) => {
  const currentPath = usePathname();
  const isActive = currentPath.startsWith(path);
  // const isActive = currentPath === path;

  return (
    <li key={title}>
      <Link
        href={path}
        className={`flex items-center gap-2 rounded-md py-2 px-4 ${
          isActive
            ? "text-slate-200 bg-blue-600"
            : "text-slate-500 transition-all duration-200 hover:bg-primary-100/50 hover:text-primary-900 "
        }`}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default NavLink;
