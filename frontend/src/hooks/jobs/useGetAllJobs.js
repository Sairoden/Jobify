// REACT & LIBRARIES
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { getAllJobs } from "../../services";

const useGetAllJobs = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const jobStatus = searchParams.get("jobStatus");
  const jobType = searchParams.get("jobType");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

  const query = {
    search,
    jobStatus,
    jobType,
    sort,
    page,
  };

  const {
    data: allJobs,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getAllJobs(query),
  });

  useEffect(() => {
    refetch();
  }, [searchParams, refetch]);

  if (!allJobs && !isPending) toast.error("No jobs found");

  return { allJobs, isPending };
};

export default useGetAllJobs;
