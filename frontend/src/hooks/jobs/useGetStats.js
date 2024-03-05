// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getStats } from "../../services/apiJobs";

const useGetStats = () => {
  const { data: stats, isPending } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  return { stats, isPending };
};

export default useGetStats;
