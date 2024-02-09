// STYLES
import styled from "styled-components";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

// CONTEXTS
import { useDashboardContext } from "../contexts";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <StyledThemeToggle onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </StyledThemeToggle>
  );
}

const StyledThemeToggle = styled.button`
  background: transparent;
  border-color: transparent;
  width: 3.5rem;
  height: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;

  .toggle-icon {
    font-size: 1.15rem;
    color: var(--text-color);
  }
`;

export default ThemeToggle;
