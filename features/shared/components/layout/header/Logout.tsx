import { useLogout } from "@/features/authentication/hooks/useLogout";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

const Logout = () => {
  const { isPending, logout } = useLogout();

  const handleLogoutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logout();
  };

  return isPending ? (
    "..."
  ) : (
    <button
      onClick={handleLogoutClick}
      className="text-primary-900 flex items-center hover:text-error transition-all duration-200"
    >
      <HiArrowRightOnRectangle className="w-5 h-5" />
    </button>
  );
};

export default Logout;
