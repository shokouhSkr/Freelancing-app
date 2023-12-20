import http from "@/features/shared/services/httpService";

export const getCategory = () => {
  return http.get("/category/list").then(({ data }) => data.data);
};
