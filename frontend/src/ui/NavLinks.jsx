// REACT & LIBRARIES
import { NavLink } from "react-router-dom";

// CONTEXTS
import { useDashboardContext } from "../contexts";

// UTILS
import { links } from "../utils";

function NavLinks() {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map(link => {
        const { text, path, icon } = link;

        return (
          <NavLink
            key={text}
            className="nav-link"
            to={path}
            onClick={toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
