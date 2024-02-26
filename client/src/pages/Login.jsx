import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormRow, Nav_Landing } from "../components";

const Login = () => {
  return (
    <>
      <Nav_Landing />
      <Wrapper>
        <form action="#">
          <h4>
            Hi, <span>Welcome Back</span>
          </h4>
          <div className="form-col">
            <FormRow
              type="email"
              name="email"
              labelText="Email"
              defaultValue="g@gmail.com"
            />
          </div>
          <div className="form-col">
            <FormRow
              type="password"
              name="password"
              labelText="Password"
              defaultValue="password"
            />
          </div>
          <div className="con">
            <button type="submit">Login</button>
          </div>
          <div className="con">
            <button type="button" className="tryBtn">
              Try out the site
            </button>
          </div>

          <p>
            Not a member?
            <Link className="link" to="/register">
              Register
            </Link>
          </p>
        </form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  min-height: 90vh;
  background-color: var(--dark-bg);
  color: var(--dark-font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  form {
    width: 30vw;
    h4 {
      font-size: 1.8rem;
      font-weight: 400;
      span {
        font-weight: 800;
      }
      margin-bottom: 20px;
    }

    .form-col {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .con {
      width: 100%;
      padding: 0 0.5rem 0 0.5rem;
      box-sizing: border-box;

      button {
        width: 100%;
        padding: 1rem 0.3rem 0.8rem 0.3rem;
        border-radius: 8px;
        border: 0;
        background-color: var(--dark-font-color);
        font-family: "Poppins", sans-serif;
        color: var(--dark-bg);
        font-weight: 600;
        cursor: pointer;
        margin-top: 20px;
      }
      .tryBtn {
        background-color: var(--dark-bg);
        color: var(--dark-font-color);
        border: 1px solid var(--dark-font-color);
        font-weight: 400;
        transition: all 0.2s;
      }
      .tryBtn:hover {
        background-color: var(--dark-font-color);
        color: var(--dark-bg);
        font-weight: 600;
      }
    }
    p {
      margin-bottom: 70px;
      font-size: 0.8rem;
      .link {
        color: var(--dark-font-color);
        margin-left: 5px;
      }
    }
  }
`;

export default Login;
