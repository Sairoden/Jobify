// REACT & LIBRARIES
import axios from "axios";

// ROUTES
import { config, getCurrentUserRouter, updateUserRouter } from "../utils";

export const getCurrentUser = async () => {
  const { data } = await axios.get(getCurrentUserRouter, config);

  return data?.user;
};

export const updateUser = async newUser => {
  await axios.patch(updateUserRouter, newUser, config);
};
