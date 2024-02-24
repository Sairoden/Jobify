// COMPONENTS
import { Job, Loader } from "./index";

// STYLES
import styled from "styled-components";

// CONTEXTS
import { useJobContext } from "../contexts";

function JobsContainer() {
  const { allJobs, allJobsPending } = useJobContext();

  if (allJobsPending) return <Loader />;

  if (allJobs === 0)
    return (
      <StyledJobsContainer>
        <h2>No jobs to display...</h2>
      </StyledJobsContainer>
    );

  return (
    <StyledJobsContainer>
      <div className="jobs">
        {allJobs.map(job => (
          <Job key={job._id} {...job} />
        ))}
      </div>
    </StyledJobsContainer>
  );
}

const StyledJobsContainer = styled.section`
  margin-top: 4rem;

  h2 {
    text-transform: none;
  }

  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media only screen and (min-width: 1120px) {
    .jobs {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
`;

export default JobsContainer;
