// REACT & LIBRARIES
import { FormRow, FormRowSelect } from "../components";
import { useNavigate, useParams } from "react-router-dom";

// UTILS
import { JOB_TYPE, JOB_STATUS } from "../utils";

// HOOKS
import { useEditJob } from "../hooks";

function EditJob() {
  const { jobId } = useParams();
  const { editJob, isPending } = useEditJob();

  return (
    <button onClick={() => editJob({ newJob: { user: "Sairoden" }, jobId })}>
      CLICK ME
    </button>
  );
}

export default EditJob;
