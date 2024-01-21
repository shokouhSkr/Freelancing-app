import http from "@/features/shared/services/httpService";

export const getOwnerProjects = () => {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};

export const getProject = (id: any) => {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
};

// add Api to the end of function names => createProjectApi
export const createProject = (data: any) => {
  return http.post("/project/add", data).then(({ data }) => data.data);
};

export const editProject = ({ newProject, id }: { newProject: any; id: string }) => {
  return http.patch(`/project/update/${id}`, newProject).then(({ data }) => data.data);
};

export const toggleStatusProject = ({ data, id }: { data: any; id: string }) => {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data); // data => {status:"OPEN"}
};

export const removeOwnerProject = (id: string) => {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
};
