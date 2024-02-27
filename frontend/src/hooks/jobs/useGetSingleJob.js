// REACT & LIBRARIES
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// STYLEs
import { toast } from "react-toastify";

// SERVICES
import { getSingleJob } from "../../services";

const useGetSingleJob = () => {
  const { jobId } = useParams();

  const { data: singleJob, isPending } = useQuery({
    queryKey: ["job"],
    queryFn: () => getSingleJob(jobId),
  });

  if (!singleJob && !isPending) toast.error("No job found");

  return { singleJob, isPending };
};

export default useGetSingleJob;
