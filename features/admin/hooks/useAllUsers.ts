import { useQuery } from "@tanstack/react-query";
import { getAllUsersApi } from "../services/usersService";

export const useAllUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsersApi,
  });

  const { users: allUsers } = data || {};

  return { isLoading, allUsers };
};
