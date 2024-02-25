// COMPONENTS
import { Loader, SearchContainer, JobsContainer } from "../components";

// CONTEXTS
import { useGetAllJobs } from "../hooks";
function AllJobs() {
  const { allJobs, allJobsPending } = useGetAllJobs();

  if (allJobsPending) return <Loader />;

  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
}

export default AllJobs;
