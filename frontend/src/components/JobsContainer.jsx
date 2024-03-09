// STYLES
import styled from "styled-components";

// COMPONENTS
import { Job, Loader, PageButtonContainer } from "./index";

// CONTEXTS
import { useJobContext } from "../contexts";

function JobsContainer() {
  const { allJobs, allJobsPending } = useJobContext();

  if (allJobsPending) return <Loader />;

  let { jobs, totalJobs, numOfPages, currentPage } = allJobs;

  console.log(allJobs);

  if (jobs === 0)
    return (
      <StyledJobsContainer>
        <h2>No jobs to display...</h2>
      </StyledJobsContainer>
    );

  numOfPages = 2;

  return (
    <StyledJobsContainer>
      <h5>
        {totalJobs} {jobs.length > 1 ? "jobs" : "job"} found
      </h5>
      <div className="jobs">
        {jobs.map(job => (
          <Job key={job._id} {...job} />
        ))}
        {numOfPages > 1 && (
          <PageButtonContainer
            numOfPages={numOfPages}
            currentPage={currentPage}
          />
        )}
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
