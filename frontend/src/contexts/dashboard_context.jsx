// REACT & LIBRARIES
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

// HOOKS
import { useGetCurrentUser, useLogout } from "../hooks";

const DashboardContext = createContext();

// REDUCERS
const initialDashboard = {
  showSidebar: false,
  isDarkTheme: false,
};

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "dashboard/showSidebar":
      return { ...state, showSidebar: !state.showSidebar };

    case "dashboard/isDarkTheme":
      return { ...state, isDarkTheme: action.payload };
  }
};

export const DashboardProvider = ({ children }) => {
  const [{ showSidebar, isDarkTheme }, dispatch] = useReducer(
    dashboardReducer,
    initialDashboard
  );
  const navigate = useNavigate();
  const { currentUser, isPending: userPending } = useGetCurrentUser();
  const { logout, isPending: logoutPending } = useLogout();

  const user = currentUser;

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;

    dispatch({ type: "dashboard/isDarkTheme", payload: newDarkTheme });
    document.body.classList.toggle("dark-theme", newDarkTheme);
  };

  const toggleSidebar = () => {
    dispatch({ type: "dashboard/showSidebar" });
  };

  const logoutUser = async () => {
    logout;
    return navigate("/");
  };

  const value = {
    showSidebar,
    isDarkTheme,
    toggleDarkTheme,
    dispatch,
    toggleSidebar,
    logoutUser,
    user,
    userPending,
    logoutPending,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
