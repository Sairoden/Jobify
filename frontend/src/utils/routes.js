export const BASE_URL = "https://jobify-4uwc.onrender.com/api/v1";
export const config = {
  withCredentials: true,
};

// AUTH
export const registerRouter = `${BASE_URL}/auth/register`;
export const loginRouter = `${BASE_URL}/auth/login`;
export const logoutRouter = `${BASE_URL}/auth/logout`;

// USERS
export const getCurrentUserRouter = `${BASE_URL}/users/current-user`;
export const updateUserRouter = `${BASE_URL}/users/update-user`;

// USERS - ADMIN
export const getAppStatsRouter = `${BASE_URL}/users/admin/app-stats`;

// JOBS
export const getStatsRouter = `${BASE_URL}/jobs/stats`;
export const getAllJobsRouter = `${BASE_URL}/jobs`;
export const getSingleJobRouter = `${BASE_URL}/jobs`;
export const createJobRouter = `${BASE_URL}/jobs`;
export const updateJobRouter = `${BASE_URL}/jobs`;
export const deleteJobRouter = `${BASE_URL}/jobs`;
