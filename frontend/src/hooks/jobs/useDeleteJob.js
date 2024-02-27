// REACT & LIBRARIES
import { useMutation, useQueryClient } from "@tanstack/react-query";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { deleteJob as deleteJobApi } from "../../services";

export const useDeleteJob = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteJob, isPending } = useMutation({
    mutationFn: deleteJobApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["jobs"]);
      toast.success("Job deleted successfully");
    },
    onError: err => {
      toast.error(err?.response?.data);
      console.error(err.message);
    },
  });

  return { deleteJob, isPending };
};

export default useDeleteJob;
