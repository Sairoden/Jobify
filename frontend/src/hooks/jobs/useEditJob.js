// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { editJob as editJobApi } from "../../services";

const useEditJob = () => {
  const navigate = useNavigate();

  const { mutate: editJob, isPending } = useMutation({
    mutationFn: ({ newJob, jobId }) => editJobApi({ newJob, jobId }),
    onSuccess: () => {
      toast.success("Job edited successfully");
      navigate("/dashboard/all-jobs");
    },
    onError: err => {
      toast.error(err?.response?.data);
      console.error(err.message);
    },
  });

  return { editJob, isPending };
};

export default useEditJob;
