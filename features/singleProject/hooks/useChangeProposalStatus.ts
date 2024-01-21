import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeProposalStatusApi } from "../services/proposalService";

export const useChangeProposalStatus = () => {
  const { isPending: isUpdatingStatus, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,

    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdatingStatus, changeProposalStatus };
};
