// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { createJob as createJobApi } from "../../services";

const useCreateJob = () => {
  const navigate = useNavigate();

  const { mutate: createJob, isPending } = useMutation({
    mutationFn: createJobApi,
    onSuccess: () => {
      toast.success("Job created successfully");
      navigate("/dashboard/all-jobs");
    },
    onError: err => {
      toast.error(err?.response?.data);
      console.error(err.message);
    },
  });

  return { createJob, isPending };
};

export default useCreateJob;
