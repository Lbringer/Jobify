import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Setup for router(updated from v6.4)
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);

//Return the router provider with prop of router
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
