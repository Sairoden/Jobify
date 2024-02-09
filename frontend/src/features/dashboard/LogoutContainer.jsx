// REACT & LIBRARIES
import { useState } from "react";

// STYLES
import styled from "styled-components";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

// CONTEXTS
import { useDashboardContext } from "../../contexts";

function LogoutContainer() {
  const { user, logoutUser } = useDashboardContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <StyledLogoutContainer>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => {
          setShowLogout(prevLogout => !prevLogout);
        }}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>

      <div className={`dropdown ${showLogout && "show-dropdown"}`}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </StyledLogoutContainer>
  );
}

const StyledLogoutContainer = styled.div`
  position: relative;

  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }

  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }

  .show-dropdown {
    visibility: visible;
  }

  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export default LogoutContainer;
