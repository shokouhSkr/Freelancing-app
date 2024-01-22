"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import useLocalStorageState from "@/features/shared/hooks/useLocalStorageState";
import { DarkModeContextType } from "@/types";

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches // true, false
  );

  const toggleDarkMode = () => setIsDarkMode((prev: boolean) => !prev);

  // 1. use "dark" and "light" instead of "dark-mode" and "light-mode"
  // 2. add "darkMode: "class"" in tailwind.config.ts
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}
