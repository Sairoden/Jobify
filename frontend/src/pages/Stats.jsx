// COMPONENTS
import { ChartsContainer, StatsContainer, Loader } from "../components";

// HOOKS
import { useGetStats } from "../hooks";

function Stats() {
  const { stats, isPending: isStatsPending } = useGetStats();

  if (isStatsPending) return <Loader />;

  return (
    <>
      <StatsContainer defaultStats={stats?.defaultStats} />
      {stats?.monthlyApplications?.length > 1 && (
        <ChartsContainer data={stats?.monthlyApplications} />
      )}
    </>
  );
}

export default Stats;
