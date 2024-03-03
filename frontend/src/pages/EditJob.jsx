// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// COMPONENTS
import { FormRow, FormRowSelect, Loader, SubmitButton } from "../components";

// UTILS
import { JOB_TYPE, JOB_STATUS } from "../utils";

// HOOKS
import { useEditJob, useGetSingleJob } from "../hooks";

function EditJob() {
  const { editJob, isPending: editJobPending } = useEditJob();
  const { register, handleSubmit } = useForm();
  const { singleJob, isPending: singleJobPending } = useGetSingleJob();

  if (singleJobPending) return <Loader />;

  const { _id, position, company, jobLocation, jobStatus, jobType } = singleJob;

  const handleEditJob = data => {
    editJob({ newJob: data, jobId: _id });
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
            defaultValue={jobStatus}
            list={Object.values(JOB_STATUS)}
            register={register}
            required
            id="jobStatus"
            disabled={editJobPending}
          />

          <FormRowSelect
            labelText="Job Type"
            type="text"
            defaultValue={jobType}
            list={Object.values(JOB_TYPE)}
            register={register}
            required
            id="jobType"
            disabled={editJobPending}
          />

          <SubmitButton formBtn isPending={editJobPending} />
        </div>
      </form>
    </div>
  );
}

export default EditJob;
