"use client";

import { UserAvatar, HeaderMenu } from "@/features";
import { useUser } from "@/features/authentication/hooks/useUser";

const Header = () => {
  const { isLoading, user } = useUser();
  console.log("user data: ", user);

  return (
    <div className="col-start-1 md:col-start-2 col-span-2 bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-5 ${
          isLoading && "blur-sm opacity-50"
        }`}
      >
        <UserAvatar user={user} />
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
