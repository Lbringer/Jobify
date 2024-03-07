import { useSelector } from "react-redux";
import logo from "../assets/images/logo.svg";
import logo_light from "../assets/images/logo_light.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Logo = () => {
  const dark_theme = useSelector((state) => state.user.dark_theme);

  if (dark_theme) {
    return (
      <Wrapper>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Link to="/" className="logo">
          <img src={logo_light} alt="logo" />
        </Link>
      </Wrapper>
    );
  }
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
