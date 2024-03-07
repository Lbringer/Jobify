import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
const HomeLayout = () => {
  const css = useSelector((state) => state.user.css);
  return (
    <>
      <ThemeProvider theme={css}>
        {/* Turns into element of children depending on path */}
        {/* In parent route it becomes the index:true element */}
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default HomeLayout;
