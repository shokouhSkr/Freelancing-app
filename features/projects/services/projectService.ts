import http from "@/features/shared/services/httpService";

export const getOwnerProjects = () => {
  return http.get("/project/owner-projects");
};
