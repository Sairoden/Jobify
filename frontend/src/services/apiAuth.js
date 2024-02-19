// REACT & LIBRARIES
import axios from "axios";

// UTILS
import { registerRouter } from "../utils";

export const register = async data => {
  await axios.post(registerRouter, data);
};
