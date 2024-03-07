import styled from "styled-components";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <Wrapper>
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink className="link" to={path} key={text} end>
            {icon}
            <span> {text}</span>
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 90vh;
  background-color: ${(props) => props.theme.bg};
  width: 20vw;
  display: flex;
  flex-direction: column;
  padding: 0 5vw 5vw 5vw;
  box-sizing: border-box;
  .link {
    color: ${(props) => props.theme.menu};
    font-size: 0.85rem;
    margin-top: 3rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    span {
      margin-left: 1rem;
    }
    transition: all 0.2s;
  }
  .link:hover,
  a.active {
    color: ${(props) => props.theme.font};
  }
`;
export default SideBar;
