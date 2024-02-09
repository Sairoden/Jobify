// REACT & LIBRARIES
import { useState } from "react";

// STYLES
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

// CONTEXTS
import { useDashboardContext } from "../../contexts";

function LogoutContainer() {
  const { user, logoutUser } = useDashboardContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div>
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
    </div>
  );
}

export default LogoutContainer;
