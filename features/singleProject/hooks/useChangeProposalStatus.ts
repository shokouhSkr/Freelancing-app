import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeProposalStatusApi } from "../services/proposalService";

export const useChangeProposalStatus = () => {
  const { isPending: isUpdatingStatus, mutateAsync: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,

    onSuccess: (data) => {
      console.log("data from changeProposalStatus: ", data);
      toast.success(data.message);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdatingStatus, changeProposalStatus };
};
