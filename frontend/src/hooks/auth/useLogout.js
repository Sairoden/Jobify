// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { logout as logoutApi } from "../../services";

const useLogout = () => {
  const { data: logout, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: logoutApi,
  });

  return { logout, isPending };
};

export default useLogout;
