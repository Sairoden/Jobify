// REACT & LIBRARIES
import { useState } from "react";

// STYLES
import styled from "styled-components";

// COMPONENTS
import { BarChart, AreaChart } from "./index";

function ChartsContainer({ data }) {
  const [barChart, setBarChart] = useState(true);

  return (
    <StyledChartsContainer>
      <h4>Monthly Applications</h4>

      <button
        type="button"
        onClick={() => setBarChart(prevBarChart => !prevBarChart)}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </StyledChartsContainer>
  );
}

const StyledChartsContainer = styled.section`
  margin-top: 4rem;
  text-align: center;

  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }

  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default ChartsContainer;
