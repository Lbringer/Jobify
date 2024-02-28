import styled from "styled-components";
import change from "../assets/images/changeTheme.svg";
import { useDispatch } from "react-redux";
import { TOGGLE_DARK_THEME } from "../redux/User/UserSlice";

const ChangeThemeBtn = () => {
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(TOGGLE_DARK_THEME());
  };
  return (
    <Wrapper onClick={changeTheme}>
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
