// REACT & LIBRARIES
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// PAGES
import {
  AddJob,
  Admin,
  DashboardLayout,
  EditJob,
  DeleteJob,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
  AllJobs,
} from "./pages";

function App() {
  fetch("http://localhost:3000/api/v1/test")
    .then(res => res.json())
    .then(data => console.log(data));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <DashboardLayout />,
          children: [
            {
              path: "/dashboard",
              element: <AddJob />,
            },
            {
              path: "all-jobs",
              element: <AllJobs />,
            },
            {
              path: "stats",
              element: <Stats />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "admin",
              element: <Admin />,
            },
            {
              path: "all-jobs",
              element: <Admin />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// 7 - 6
