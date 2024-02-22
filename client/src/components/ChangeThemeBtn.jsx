import styled from "styled-components";
import change from "../assets/images/changeTheme.svg";

const ChangeThemeBtn = () => {
  return (
    <Wrapper>
      <img src={change} alt="change theme" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  img {
    height: 60%;
  }
`;

export default ChangeThemeBtn;
