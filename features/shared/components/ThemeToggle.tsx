import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({
  isDarkTheme,
  handleTheme,
}: {
  isDarkTheme: Boolean;
  handleTheme: () => void;
}) => {
  return (
    <button onClick={handleTheme} className="flex items-center text-primary-900">
      {isDarkTheme ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
