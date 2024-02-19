// REACT & LIBRARIES
import axios from "axios";

// ROUTES
import { registerRouter, loginRouter, config, logoutRouter } from "../utils";

export const register = async data => {
  await axios.post(registerRouter, data, config);
};

export const login = async data => {
  await axios.post(loginRouter, data, config);
};

export const logout = async () => {
  await axios.get(logoutRouter, config);
};
