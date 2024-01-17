import { NavLink } from "@/types";
import { HiCollection, HiHome } from "react-icons/hi";

export const RESET_TIME = 90;

export const navLinks: NavLink[] = [
  { title: "خانه", path: "/owner/dashboard", icon: <HiHome /> },
  { title: "پروژه ها", path: "/owner/projects", icon: <HiCollection /> },
];
