import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  //Gives us more info abt the error and this works with the errorElement
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <Wrapper>
        <div className="code">{error.status}</div>
        <div>{error.data}</div>
        <div>Error</div>
        <Link to="/dashboard">Back home</Link>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="code">Error!!</div>
        <Link to="/dashboard">Back home</Link>
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-bg);
  color: var(--dark-font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    font-size: 0.8rem;
  }
  .code {
    font-size: 2rem;
    font-weight: 600;
  }
  a {
    color: var(--dark-color-font);
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`;

export default Error;
