// REACT & LIBRARIES
import axios from "axios";

// ROUTES
import { config, getCurrentUserRouter } from "../utils";

export const getCurrentUser = async () => {
  const { data } = await axios.get(getCurrentUserRouter, config);

  return data?.user;
};
