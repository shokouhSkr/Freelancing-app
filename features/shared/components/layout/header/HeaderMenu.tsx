"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import ThemeToggle from "../../ThemeToggle";
import Logout from "./Logout";

const HeaderMenu = () => {
  return (
    <ul className="flex gap-4 items-center">
      <li>
        <Link href="/owner/dashboard">
          <HiOutlineUser className="w-5 h-5 text-primary-900" />
        </Link>
      </li>
      <li>
        <ThemeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
};

export default HeaderMenu;
