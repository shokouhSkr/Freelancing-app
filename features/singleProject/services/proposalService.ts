import http from "@/features/shared/services/httpService";

export const changeProposalStatusApi = ({ id, data }: { id: any; data: any }) => {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
};
