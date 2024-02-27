// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { getAppStats } from "../../services";

const useGetAppStats = () => {
  const navigate = useNavigate();

  const {
    data: appStats,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["appStats"],
    queryFn: getAppStats,
  });

  if (isError) {
    toast.error("You are not authorized to view this page");
    navigate("/dashboard");
  }

  return { appStats, isPending };
};

export default useGetAppStats;
