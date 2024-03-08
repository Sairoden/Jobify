// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";

// STYLES
import { toast } from "react-toastify";

// SERVICES
import { updateUser as updateUserApi } from "../../services";

const useUpdateUser = () => {
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success("Successfully updated the user");
    },
    onError: err => {
      toast.error(err?.response?.data);
      console.error(err.message);
    },
  });

  return { updateUser, isPending };
};

export default useUpdateUser;
