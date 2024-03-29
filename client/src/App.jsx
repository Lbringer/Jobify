import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Import like this is possible because of the index.js in src/pages
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashBoardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from "./pages";

//Router Setup - path and element
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    //When any error is there this component will be rendered
    //For any child routes as well the error bubbles up
    errorElement: <Error />,
    children: [
      {
        //Default when we go to the parent route
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashBoardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

//Router Provider is the server of sorts which manages the component depending on the url
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
