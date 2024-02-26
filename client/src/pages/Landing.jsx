import { Link } from "react-router-dom";
import styled from "styled-components";
import { Nav_Landing } from "../components";

const Landing = () => {
  return (
    <>
      <Nav_Landing />
      <Wrapper>
        <div className="con">
          <h1>
            Job <span>Tracking</span> Made Easy..
          </h1>
          <p>
            Best place to get notifications about new jobs and let others known
            if you stumble on a job.
          </p>
          <div className="btn-con">
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/login" className="btn outline">
              Login
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  min-height: 90vh;
  background-color: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-font-color);
  text-align: center;
  .con {
    width: 60vw;
    height: 20vw;
    padding: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: 400;
      span {
        font-weight: 800;
      }
      font-size: 2.5rem;
    }
    p {
      font-size: 0.8rem;
      width: 50%;
    }
    .btn-con {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 100px;
      .btn {
        text-decoration: none;
        color: var(--dark-bg);
        background-color: var(--dark-font-color);
        font-size: 0.8rem;
        padding: 0.8rem 2rem 0.8rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        border-radius: 5px;
      }
      .outline {
        color: var(--dark-font-color);
        background-color: var(--dark-bg);
        border: 1px solid var(--dark-font-color);
        transition: all 0.2s;
        margin-left: 10px;
      }
      .outline:hover {
        color: var(--dark-bg);
        background-color: var(--dark-font-color);
      }
    }
  }
`;

export default Landing;
