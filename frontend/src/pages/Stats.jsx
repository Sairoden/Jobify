// COMPONENTS
import { ChartsContainer, StatsContainer, Loader } from "../components";

// HOOKS
import { useGetStats } from "../hooks";

function Stats() {
  const {
    stats: { defaultStats, monthlyApplications },
    isPending: isStatsPending,
  } = useGetStats();

  if (isStatsPending) return <Loader />;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}

export default Stats;
