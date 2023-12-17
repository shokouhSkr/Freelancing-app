import http from "@/features/shared/services/httpService";

export const getOwnerProjects = () => {
  return http.get("/project/owner-projects");
};

export const removeOwnerProject = (id: string) => {
  return http.get(`/project/${id}`);
};
