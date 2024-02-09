// STYLES
import styled from "styled-components";
import { FaAlignLeft } from "react-icons/fa";

// FEATURES COMPONENTS
import { LogoutContainer } from "../features";

// UI COMPONENTS
import { Logo } from "../ui";

// CONTEXTS
import { useDashboardContext } from "../contexts";

function Navbar() {
  const { toggleSidebar } = useDashboardContext();

  return (
    <StyledNavbar>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Dashboard</h4>
        </div>

        <div className="btn-container">
          <LogoutContainer />
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }

  .logo-text {
    display: none;
  }

  .btn-container {
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }

    .logo {
      display: none;
    }

    .logo-text {
      display: block;
    }
  }
`;

export default Navbar;
