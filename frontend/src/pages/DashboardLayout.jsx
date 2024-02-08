// REACT & LIBRARIES
import { Outlet } from "react-router-dom";

// STYLES
import styled from "styled-components";

// FEATURES COMPONENTS
import { BigSideBar, SmallSideBar } from "../features";

// UI COMPONENTS
import { Navbar } from "../ui";

// CONTEXTS
import { DashboardProvider } from "../contexts";

function DashboardLayout() { 
  return (
    <DashboardProvider>
      <StyledDashboard>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />

          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </StyledDashboard>
    </DashboardProvider>
  );
}

const StyledDashboard = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }

  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }

  @media only screen and (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }

    .dashboard-page {
      width: 90%;
    }
  }
`;

export default DashboardLayout;
