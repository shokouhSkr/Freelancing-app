import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/authService";

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
    // refetchOnWindowFocus: true,
  });

  const { user } = data || {};

  return { isLoading, user };
};
