// STYLES
import styled from "styled-components";

function JobInfo({ icon, text }) {
  return (
    <StyledJobInfo>
      <span className="job-icon">{icon}</span>
      <span className="job-text">{text}</span>
    </StyledJobInfo>
  );
}

const StyledJobInfo = styled.div`
  display: flex;
  align-items: center;

  .job-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;

    svg {
      color: var(--text-secondary-color);
    }
  }

  .job-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
`;

export default JobInfo;
