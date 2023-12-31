"use client";

import { useGetUser } from "@/features/authentication/hooks/useGetUser";

const Header = () => {
  const { data } = useGetUser();
  console.log("user data: ", data?.data.data);

  return (
    <div className="col-start-2 col-span-2 bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      Header
    </div>
  );
};

export default Header;
