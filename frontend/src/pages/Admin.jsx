// STYLES
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import styled from "styled-components";

// COMPONENTS
import { Loader, StatItem } from "../components";

// CONTEXTS
import { useGetAppStats } from "../hooks";

function Admin() {
  const { appStats, isPending: appStatsPending } = useGetAppStats();

  if (appStatsPending) return <Loader />;

  const { users, jobs } = appStats;

  console.log(appStatsPending);

  return (
    <StyledAdmin>
      <StatItem
        title="Current Users"
        count={users}
        color="#e9b949"
        backgroundColor="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="Total Jobs"
        count={jobs}
        color="#647acb"
        backgroundColor="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </StyledAdmin>
  );
}

const StyledAdmin = styled.section`
  display: grid;
  row-gap: 2rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }

  @media only screen and (min-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Admin;
