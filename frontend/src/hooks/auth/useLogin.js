// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { login as loginApi } from "../../services";

const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success("Logged in successfully");
      navigate("/dashboard");
    },
    onError: err => {
      toast.error(err?.response?.data);
      console.error(err.message);
    },
  });

  return { login, isPending };
};

export default useLogin;
