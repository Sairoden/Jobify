// REACT & LIBRARIES
import { createContext, useContext, useReducer } from "react";

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

  // TEMP
  const user = { name: "Sairoden" };

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;

    dispatch({ type: "dashboard/isDarkTheme", payload: newDarkTheme });
    document.body.classList.toggle("dark-theme", newDarkTheme);
  };

  const toggleSidebar = () => {
    dispatch({ type: "dashboard/showSidebar" });
  };

  const logoutUser = async () => {
    console.log("LOGOUT USER");
  };

  const value = {
    showSidebar,
    isDarkTheme,
    toggleDarkTheme,
    dispatch,
    toggleSidebar,
    logoutUser,
    user,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
