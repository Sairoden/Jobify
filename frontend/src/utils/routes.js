export const BASE_URL = "http://localhost:3000/api/v1";
export const config = {
  withCredentials: true,
};

// AUTH
export const registerRouter = `${BASE_URL}/auth/register`;
export const loginRouter = `${BASE_URL}/auth/login`;
export const logoutRouter = `${BASE_URL}/auth/logout`;

// USERS
export const getCurrentUserRouter = `${BASE_URL}/users/current-user`;
