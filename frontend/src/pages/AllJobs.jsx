// COMPONENTS
import { Loader, SearchContainer, JobsContainer } from "../components";

// HOOKS
import { useGetAllJobs } from "../hooks";

function AllJobs() {
  const { allJobs, isPending } = useGetAllJobs();

  if (isPending) return <Loader />;

  console.log(allJobs);

  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
}

export default AllJobs;
