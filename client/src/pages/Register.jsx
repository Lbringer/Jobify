import styled from "styled-components";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import { FormRow, Nav_Landing } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

//Way to submit the form
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <Nav_Landing />
      <Wrapper>
        <Form method="post" action="#">
          <h4>
            Hi, <span>Welcome</span>
          </h4>
          <div className="form-col">
            <FormRow
              type="text"
              name="name"
              labelText="Name"
              defaultValue="Aditya"
            />
          </div>
          <div className="form-col">
            <FormRow
              type="text"
              name="location"
              labelText="Location"
              defaultValue="Japan"
            />
            <FormRow
              type="email"
              name="email"
              labelText="Email"
              defaultValue="aditya@gmail.com"
            />
          </div>
          <div className="form-col">
            <FormRow
              type="password"
              name="password"
              labelText="Password"
              defaultValue="secret123!"
            />
          </div>
          <div className="con">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

          <p>
            Already a member?
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </Form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  min-height: 90vh;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.font};
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
        background-color: ${(props) => props.theme.font};
        font-family: "Poppins", sans-serif;
        color: ${(props) => props.theme.bg};
        font-weight: 600;
        cursor: pointer;
        margin-top: 20px;
      }
    }
    p {
      margin-bottom: 70px;
      font-size: 0.8rem;
      .link {
        color: ${(props) => props.theme.font};
        margin-left: 5px;
      }
      font-weight: 500;
    }
  }
`;

export default Register;
