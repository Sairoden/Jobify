// REACT & LIBRARIES
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// UI COMPONENTS
import { Logo, FormRow } from "../ui";

function Register() {
  return (
    <StyledRegister>
      <form className="form">
        <Logo />
        <h4>Register</h4>

        <FormRow
          type="text"
          id="firstName"
          name="firstName"
          labelText="First Name"
          defaultValue="Sairoden"
        />

        <FormRow
          type="text"
          id="lastName"
          name="lastName"
          labelText="Last Name"
          defaultValue="Gandarosa"
        />

        <FormRow
          type="text"
          id="location"
          name="location"
          labelText="Location"
          defaultValue="871 M Delafuente"
        />

        <FormRow
          type="email"
          id="email"
          name="email"
          labelText="Email"
          defaultValue="odingandarosa@gmail.com"
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>

        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </StyledRegister>
  );
}

const StyledRegister = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    align-items: center;
  }

  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }

  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }

  .btn {
    margin-top: 1rem;
  }

  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;

export default Register;
