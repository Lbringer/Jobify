import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { Nav_DashBoard, SideBar } from "../components";
import styled from "styled-components";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/currentUser");
    return data.user;
  } catch (error) {
    return redirect("/");
  }
};

const DashBoardLayout = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <Nav_DashBoard user={user} />
      <Wrapper>
        <SideBar />
        <Outlet context={user} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.font};
  display: flex;
  height: 90vh;
`;

export default DashBoardLayout;
