// REACT & LIBRARIES
import { createContext, useContext, useReducer } from "react";

// HOOKS
import { useGetAllJobs } from "../hooks";

const JobContext = createContext();

const initialJob = {};
const jobReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const JobProvider = ({ children }) => {
  const { allJobs, isPending: allJobsPending } = useGetAllJobs();
  const [state, dispatch] = useReducer(jobReducer, initialJob);

  const value = { allJobs, allJobsPending };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export const useJobContext = () => useContext(JobContext);
