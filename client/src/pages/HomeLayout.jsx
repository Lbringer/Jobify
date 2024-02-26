import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <>
      {/* Turns into element of children depending on path */}
      {/* In parent route it becomes the index:true element */}
      <Outlet />
    </>
  );
};

export default HomeLayout;
