import { Outlet } from "react-router-dom";
import { Nav_DashBoard, SideBar } from "../components";
import styled from "styled-components";

const DashBoardLayout = () => {
  return (
    <div>
      <Nav_DashBoard />
      <Wrapper>
        <SideBar />
        <Outlet />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  height: 90vh;
`;

export default DashBoardLayout;
