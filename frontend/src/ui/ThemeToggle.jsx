// STYLES
import styled from "styled-components";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

// CONTEXTS
import { useDashboardContext } from "../contexts";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <div onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </div>
  );
}

export default ThemeToggle;
