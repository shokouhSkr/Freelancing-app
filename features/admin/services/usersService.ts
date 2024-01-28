import http from "@/features/shared/services/httpService";

export const getAllUsersApi = () => {
  return http.get("/admin/user/list").then(({ data }) => data.data);
};
