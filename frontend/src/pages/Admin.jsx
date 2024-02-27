// STYLES
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

// COMPONENTS
import { Loader } from "../components";

// CONTEXTS
import { useGetAppStats } from "../hooks";

function Admin() {
  const { appStats, isPending: appStatsPending } = useGetAppStats();

  if (appStatsPending) return <Loader />;

  console.log(appStatsPending);

  return <div>Admin</div>;
}

export default Admin;
