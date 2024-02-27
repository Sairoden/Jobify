// REACT & LIBRARIES
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

// COMPONENTS
import { FormRow, FormRowSelect, Loader } from "../components";

// UTILS
import { JOB_TYPE, JOB_STATUS } from "../utils";

// HOOKS
import { useEditJob, useGetSingleJob } from "../hooks";

function EditJob() {
  const { jobId } = useParams();
  const { editJob, isPending: editJobPending } = useEditJob();
  const { register, handleSubmit } = useForm();
  const { singleJob, isPending: singleJobPending } = useGetSingleJob();

  if (singleJobPending) return <Loader />;

  const { position, company, jobLocation } = singleJob;

  const handleEditJob = data => {
    console.log(data);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(handleEditJob)}>
        <h4 className="form-title">Edit Job</h4>

        <div className="form-center">
          <FormRow
            type="text"
            id="position"
            register={register}
            defaultValue={position}
            disabled={editJobPending}
            required
          />

          <FormRow
            type="text"
            id="company"
            register={register}
            defaultValue={company}
            disabled={editJobPending}
            required
          />

          <FormRow
            type="text"
            id="jobLocation"
            register={register}
            defaultValue={jobLocation}
            labelText="Job Location"
            required
          />

          <FormRowSelect
            labelText="Job Status"
            type="text"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
            register={register}
            required
            id="jobStatus"
            disabled={editJobPending}
          />

          <FormRowSelect
            labelText="Job Type"
            type="text"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
            register={register}
            required
            id="jobType"
            disabled={editJobPending}
          />

          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={editJobPending}
          >
            {editJobPending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditJob;
