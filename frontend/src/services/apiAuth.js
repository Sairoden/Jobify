// REACT & LIBRARIES
import axios from "axios";

// ROUTES
import { registerRouter, loginRouter } from "../utils";

export const register = async data => {
  await axios.post(registerRouter, data);
};

export const login = async data => {
  await axios.post(loginRouter, data);
};
