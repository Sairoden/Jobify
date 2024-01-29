// REACT & LIBRARIES
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hi</h1>,
    },
    {
      path: "/about",
      element: <h1>about</h1>,
    },
    {
      path: "/",
      element: <h1>Hi</h1>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// 3
