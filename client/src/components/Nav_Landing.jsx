import styled from "styled-components";
import Logo from "./Logo";
import ChangeThemeBtn from "./ChangeThemeBtn";
const Nav_Landing = () => {
  return (
    <Wrapper>
      <Logo />
      <ChangeThemeBtn />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100vw;
  height: 10vh;
  background-color: var(--dark-bg);
  padding: 2vw 7vw 0 7vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Nav_Landing;
