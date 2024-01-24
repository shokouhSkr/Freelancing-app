import http from "@/features/shared/services/httpService";

export const changeProposalStatusApi = ({
  proposalId,
  ...data
}: {
  proposalId: any;
  data: any;
}) => {
  return http.patch(`/proposal/${proposalId}`, data).then(({ data }) => data.data);
};
