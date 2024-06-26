import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ChangeThemeBtn from "./ChangeThemeBtn";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Nav_Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await customFetch.get("/auth/logout");
    toast.success("Logout successful");
    navigate("/");
  };
  return (
    <Wrapper>
      <div className="logoAndtitle">
        <Logo />
        <h2>Dashboard</h2>
      </div>
      <div className="themeaAndlogout">
        <ChangeThemeBtn />
        {!user ? (
          <button className="btn outline">Login</button>
        ) : (
          <>
            <div className="name">{user.name}</div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100vw;
  height: 10vh;
  background-color: ${(props) => props.theme.bg};
  padding: 2vw 3vw 0 8vw;
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
      color: ${(props) => props.theme.font};
      margin-left: 10rem;
      font-weight: 400;
    }
  }
  .themeaAndlogout {
    height: 100%;
    display: flex;
    align-items: center;
    .name {
      color: ${(props) => props.theme.font};
      font-size: 0.9rem;
      margin-left: 3rem;
      font-weight: 500;
    }
    .btn {
      margin-left: 1rem;
      width: 5rem;
      padding: 0.5rem 0.3rem 0.5rem 0.3rem;
      border-radius: 5px;
      border: 0;
      background-color: ${(props) => props.theme.font};
      font-family: "Poppins", sans-serif;
      color: ${(props) => props.theme.bg};
      font-weight: 600;
      cursor: pointer;
    }
    .outline {
      background-color: ${(props) => props.theme.bg};
      color: ${(props) => props.theme.font};
      border: 1px solid ${(props) => props.theme.font};
      font-weight: 400;
      transition: all 0.2s;
    }
    .outline:hover {
      background-color: ${(props) => props.theme.font};
      color: ${(props) => props.theme.bg};
      font-weight: 600;
    }
  }
`;

export default Nav_Dashboard;
