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
      return { ...state, showSidebar: !state.isDarkTheme };
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
    console.log("Toggle dark theme");
  };

  const toggleSidebar = () => {
    dispatch({ type: "dashboard/showSidebar" });
    console.log(showSidebar);
  };

  const logoutUser = async () => {
    console.log("LOGOUT USER");
  };

  const value = {
    showSidebar,
    isDarkTheme,
    dispatch,
    toggleDarkTheme,
    toggleSidebar,
    logoutUser,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
