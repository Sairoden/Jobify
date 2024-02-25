// AUTH
import useRegister from "./auth/useRegister";
import useLogin from "./auth/useLogin";
import useLogout from "./auth/useLogout";

// USERS
import useGetCurrentUser from "./users/useGetCurrentUser";

// JOBS
import useCreateJob from "./jobs/useCreateJob";
import useGetAllJobs from "./jobs/useGetAllJobs";
import useEditJob from "./jobs/useEditJob";

export {
  // AUTH
  useRegister,
  useLogin,
  useLogout,

  // USERS
  useGetCurrentUser,

  // JOBS
  useCreateJob,
  useGetAllJobs,
  useEditJob,
};
