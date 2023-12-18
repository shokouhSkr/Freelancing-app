import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/authService";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: true,
  });
};
