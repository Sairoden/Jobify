// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { editJob as editJobApi } from "../../services";

const useEditJob = () => {
  const { mutate: editJob, isPending } = useMutation({
    mutationFn: ({ newJob, jobId }) => editJobApi({ newJob, jobId }),
    onSuccess: data => {
      // console.log("Done");
    },
    onError: err => {
      toast.error(err?.response?.data);
      console.error(err.message);
    },
  });

  return { editJob, isPending };
};

export default useEditJob;
