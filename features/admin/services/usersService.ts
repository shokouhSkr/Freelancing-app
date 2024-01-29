import http from "@/features/shared/services/httpService";

export const getAllUsersApi = () => {
  return http.get("/admin/user/list").then(({ data }) => data.data);
};

export const changeUserStatusApi = ({ userId, data }: { userId: string; data: any }) => {
  return http.patch(`/admin/user/verify/${userId}`, data).then(({ data }) => data.data);
};
