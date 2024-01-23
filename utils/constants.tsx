import { NavLink } from "@/types";
import { HiCollection, HiHome } from "react-icons/hi";

export const RESET_TIME = 90;

export const ownerNavLinks: NavLink[] = [
  { title: "داشبورد", path: "/owner/dashboard", icon: <HiHome /> },
  { title: "پروژه ها", path: "/owner/projects", icon: <HiCollection /> },
];

export const freelancerNavLinks: NavLink[] = [
  { title: "داشبورد", path: "/freelancer/dashboard", icon: <HiHome /> },
  { title: "پروژه ها", path: "/freelancer/projects", icon: <HiCollection /> },
  { title: "درخواست ها", path: "/freelancer/proposals", icon: <HiCollection /> },
];
