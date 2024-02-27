// AUTH
import useRegister from "./auth/useRegister";
import useLogin from "./auth/useLogin";
import useLogout from "./auth/useLogout";

// USERS
import useGetCurrentUser from "./users/useGetCurrentUser";

// ADMIN
import useGetAppStats from "./admin/useGetAppStats";

// JOBS
import useGetAllJobs from "./jobs/useGetAllJobs";
import useGetSingleJob from "./jobs/useGetSingleJob";
import useCreateJob from "./jobs/useCreateJob";
import useEditJob from "./jobs/useEditJob";
import useDeleteJob from "./jobs/useDeleteJob";

export {
  // AUTH
  useRegister,
  useLogin,
  useLogout,

  // USERS
  useGetCurrentUser,

  // ADMIN
  useGetAppStats,

  // JOBS
  useGetAllJobs,
  useGetSingleJob,
  useCreateJob,
  useEditJob,
  useDeleteJob,
};
