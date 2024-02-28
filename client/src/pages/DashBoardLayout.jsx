import { Outlet } from "react-router-dom";
import { Nav_DashBoard } from "../components";

const DashBoardLayout = () => {
  return (
    <div>
      <Nav_DashBoard />
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;
