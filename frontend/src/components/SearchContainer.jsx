// LIBRARIES
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

// COMPONENTS
import { FormRow, FormRowSelect } from "./index";

// STYLES
import styled from "styled-components";

// UTILS
import { JOB_STATUS, JOB_TYPE, JOB_SORT_BY } from "../utils";

function SearchContainer() {
  const { register } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const delaySubmission = e => {
    let timeout;

    const { value, id } = e.target;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      searchParams.set(id, value);
      setSearchParams(searchParams);
    }, 1000);
  };

  return (
    <StyledSearchContainer>
      <form>
        <h5 className="form-title">Search Form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            id="search"
            register={register}
            onChange={e => delaySubmission(e)}
          />

          <FormRowSelect
            id="jobStatus"
            labelText="Job Status"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue="all"
            register={register}
            onChange={e => delaySubmission(e)}
          />

          <FormRowSelect
            id="jobType"
            labelText="Job Type"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue="all"
            register={register}
            onChange={e => delaySubmission(e)}
          />

          <FormRowSelect
            id="sort"
            labelText="Job Type"
            list={[...Object.values(JOB_SORT_BY)]}
            defaultValue="newest"
            register={register}
            onChange={e => delaySubmission(e)}
          />

          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </form>
    </StyledSearchContainer>
  );
}

const StyledSearchContainer = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;

  .form-title {
    margin-bottom: 2rem;
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    display: grid;
    row-gap: 1rem;
  }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default SearchContainer;
