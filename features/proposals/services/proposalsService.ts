import http from "@/features/shared/services/httpService";

export const getProposalsApi = () => {
  // proposals of who? it's handled in backend
  return http.get("/proposal/list").then(({ data }) => data.data);
};
