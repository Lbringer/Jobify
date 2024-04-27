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

//Actions
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";

//Loaders
import { loader as DashboardLayoutLoader } from "./pages/DashBoardLayout";

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
        action: RegisterAction,
      },
      {
        path: "login",
        element: <Login />,
        action: LoginAction,
      },
      {
        path: "dashboard",
        element: <DashBoardLayout />,
        loader: DashboardLayoutLoader,
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
