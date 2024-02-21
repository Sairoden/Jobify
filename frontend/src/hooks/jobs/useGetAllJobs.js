// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { getAllJobs } from "../../services";

const useGetAllJobs = () => {
  const { data: allJobs, isPending } = useQuery({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
  });

  if (!allJobs) toast.error("No jobs found");

  return { allJobs, isPending };
};

export default useGetAllJobs;
