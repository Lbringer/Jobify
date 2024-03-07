import styled from "styled-components";
const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        id={name}
        name={name}
        required
        placeholder={`Enter your ${name}`}
        defaultValue={defaultValue}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  margin: 0 0.5rem 0.5rem 0.5rem;
  label {
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    background: none;
    border: 1px solid ${(props) => props.theme.accent};
    font-family: "Poppins", sans-serif;
    padding: 1rem 0.8rem 1rem 0.8rem;
    border-width: 0.1px;
    color: ${(props) => props.theme.font};
    border-radius: 8px;
    font-weight: 500;
  }
`;

export default FormRow;
