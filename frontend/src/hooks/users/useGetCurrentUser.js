// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { getCurrentUser as getCurrentUserApi } from "../../services";

const useGetCurrentUser = () => {
  const navigate = useNavigate();
  const { data: currentUser, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
  });

  if (!isPending && !currentUser) {
    navigate("/login");
    toast.error("Please login to continue");
  }

  return { currentUser, isPending };
};

export default useGetCurrentUser;
