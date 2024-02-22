import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Logo = () => {
  return (
    <Wrapper>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 60%;
    }
  }
`;

export default Logo;
