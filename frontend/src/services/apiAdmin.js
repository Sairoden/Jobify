// REACT & LIBRARIES
import axios from "axios";

// ROUTES
import { config, getAppStatsRouter } from "../utils";

export const getAppStats = async () => {
  const { data } = await axios.get(getAppStatsRouter, config);

  return data;
};
