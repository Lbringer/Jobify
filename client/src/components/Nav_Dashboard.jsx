import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ChangeThemeBtn from "./ChangeThemeBtn";
import { useSelector } from "react-redux";

const Nav_Dashboard = () => {
  const user = useSelector((state) => state.user.name);
  return (
    <Wrapper>
      <div className="logoAndtitle">
        <Logo />
        <h2>Dashboard</h2>
      </div>
      <div className="themeaAndlogout">
        <ChangeThemeBtn />
        {user == "" ? (
          <button className="btn outline">Login</button>
        ) : (
          <>
            <div className="name">{user}</div>
            <button className="btn">Logout</button>
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100vw;
  height: 10vh;
  background-color: var(--dark-bg);
  padding: 2vw 3vw 0 3vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logoAndtitle {
    height: 100%;
    display: flex;
    align-items: center;
    h2 {
      margin: 0;
      color: var(--dark-font-color);
      margin-left: 10rem;
      font-weight: 400;
    }
  }
  .themeaAndlogout {
    height: 100%;
    display: flex;
    align-items: center;
    .name {
      color: var(--dark-font-color);
      font-size: 0.9rem;
      margin-left: 4rem;
    }
    .btn {
      margin-left: 1rem;
      width: 5rem;
      padding: 0.5rem 0.3rem 0.5rem 0.3rem;
      border-radius: 8px;
      border: 0;
      background-color: var(--dark-font-color);
      font-family: "Poppins", sans-serif;
      color: var(--dark-bg);
      font-weight: 600;
      cursor: pointer;
    }
    .outline {
      background-color: var(--dark-bg);
      color: var(--dark-font-color);
      border: 1px solid var(--dark-font-color);
      font-weight: 400;
      transition: all 0.2s;
    }
    .outline:hover {
      background-color: var(--dark-font-color);
      color: var(--dark-bg);
      font-weight: 600;
    }
  }
`;

export default Nav_Dashboard;
