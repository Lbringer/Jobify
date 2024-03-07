import styled from "styled-components";
import change from "../assets/images/changeTheme.svg";
import change_light from "../assets/images/changeTheme_light.svg";
import { useDispatch } from "react-redux";
import { TOGGLE_DARK_THEME } from "../redux/User/UserSlice";
import { useSelector } from "react-redux";

const ChangeThemeBtn = () => {
  const dark_theme = useSelector((state) => state.user.dark_theme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(TOGGLE_DARK_THEME());
  };

  if (dark_theme) {
    return (
      <Wrapper onClick={changeTheme}>
        <img src={change} alt="change theme" />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper onClick={changeTheme}>
        <img src={change_light} alt="change theme" />
      </Wrapper>
    );
  }
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
