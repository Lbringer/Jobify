import { Outlet } from "react-router-dom";
import { Nav_Landing } from "../components";
const HomeLayout = () => {
  return (
    <>
      <Nav_Landing />
      {/* Turns into element of children depending on path */}
      {/* In parent route it becomes the index:true element */}
      <Outlet />
    </>
  );
};

export default HomeLayout;
