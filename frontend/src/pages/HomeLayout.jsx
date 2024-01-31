// REACT & LIBRARIES
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <nav></nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default HomeLayout;
