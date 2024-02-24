// REACT & LIBRARIES
import { Link } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

// STYLES
import styled from "styled-components";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

// COMPONENTS
import { JobInfo } from "./index";

function Job({
  _id,
  position,
  company,
  jobLocation,
  jobStatus,
  jobType,
  createdAt,
}) {
  console.log(createdAt);

  const date = day(createdAt).format("MMM Do, YYYY");

  return (
    <StyledJob>
      <header>
        <div className="main-icon">{company[0]}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />

          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>

        <footer className="actions">
          <Link className="btn edit-btn">Edit</Link>

          <button type="button" className="btn delete-btn">
            Delete
          </button>
        </footer>
      </div>
    </StyledJob>
  );
}

const StyledJob = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }

  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }

  .info {
    h5 {
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }

  .content {
    padding: 1rem 1.5rem;
  }

  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    row-gap: 1.5rem;
    align-items: center;

    @media only screen and (min-width) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
  }

  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
`;

export default Job;