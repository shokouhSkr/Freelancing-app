import http from "@/features/shared/services/httpService";

export const getOwnerProjects = () => {
  return http.get("/project/owner-projects");
};

export const createProject = (data: any) => {
  return http.post("/project/add", data).then(({ data }) => data.data);
};

export const editProject = ({ newProject, id }: { newProject: any; id: string }) => {
  return http.patch(`/project/update/${id}`, newProject).then(({ data }) => data.data);
};

export const removeOwnerProject = (id: string) => {
  return http.delete(`/project/${id}`);
};
