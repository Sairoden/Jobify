// STYLES
import styled from "styled-components";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";

// COMPONENTS
import { StatItem } from "./index";

function StatsContainer({ defaultStats }) {
  const stats = [
    {
      title: "Pending applications",
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "Interviews scheduled",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "Jobs declined",
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <StyledStatsContainer>
      {stats.map(item => (
        <StatItem key={item.title} {...item} />
      ))}
    </StyledStatsContainer>
  );
}

const StyledStatsContainer = styled.section`
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

export default StatsContainer;
