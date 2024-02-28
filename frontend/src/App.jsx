// REACT & LIBRARIES
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
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
              path: "edit-job/:jobId",
              element: <EditJob />,
            },
            {
              path: "delete-job/:jobId",
              element: <DeleteJob />,
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
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;

//  14 - 1
