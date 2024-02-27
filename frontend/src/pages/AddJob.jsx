// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import styled from "styled-components";

// COMPONENTS
import { FormRow, Loader, FormRowSelect } from "../components";

// HOOKS
import { useCreateJob } from "../hooks";

// CONTEXTS
import { useDashboardContext } from "../contexts";

// UTILS
import { JOB_STATUS, JOB_TYPE } from "../utils";

function AddJob() {
  const { register, handleSubmit } = useForm();
  const { user, userPending } = useDashboardContext();
  const { createJob, isPending: jobPending } = useCreateJob();

  const handleAddJob = data => {
    createJob(data);
  };

  if (userPending || jobPending) return <Loader />;

  return (
    <StyledAddJob>
      <form onSubmit={handleSubmit(handleAddJob)}>
        <h4 className="form-title">Add Job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            labelText="Position"
            defaultValue="Developer"
            register={register}
            id="position"
            required
          />

          <FormRow
            type="text"
            labelText="Company"
            defaultValue="Google"
            register={register}
            id="company"
            required
          />

          <FormRow
            type="text"
            labelText="Job Location"
            defaultValue={user.location}
            register={register}
            id="jobLocation"
            required
          />

          <FormRowSelect
            labelText="Job Status"
            type="text"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
            register={register}
            id="jobStatus"
            required
          />

          <FormRowSelect
            labelText="Job Type"
            type="text"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
            register={register}
            id="jobType"
            required
          />

          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={userPending}
          >
            {userPending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </StyledAddJob>
  );
}

const StyledAddJob = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--secondary-color);
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

  @media only screen and (min-width: 992px) {
    .form-center {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      column-gap: 1rem;
    }
  }

  @media only screen and (min-width: 1120px) {
    .form-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default AddJob;
