// AUTH
import useRegister from "./auth/useRegister";
import useLogin from "./auth/useLogin";
import useLogout from "./auth/useLogout";

// USERS
import useGetCurrentUser from "./users/useGetCurrentUser";
import useUpdateUser from "./users/useUpdateUser";

// ADMIN
import useGetAppStats from "./admin/useGetAppStats";

// JOBS
import useGetStats from "./jobs/useGetStats";
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
  useUpdateUser,

  // ADMIN
  useGetAppStats,

  // JOBS
  useGetStats,
  useGetAllJobs,
  useGetSingleJob,
  useCreateJob,
  useEditJob,
  useDeleteJob,
};
