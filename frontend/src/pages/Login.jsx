// REACT & LIBRARIES
import { Link } from "react-router-dom";

// STYLES
import styled from "styled-components";

// UI COMPONENTS
import { Logo, FormRow } from "../ui";

function Login() {
  return (
    <StyledLogin>
      <form className="form">
        <Logo />
        <h4>Login</h4>

        <FormRow
          type="email"
          name="email"
          labelText="Email"
          defaultValue="odingandarosa@gmail.com"
        />

        <FormRow
          type="password"
          name="password"
          labelText="Password"
          defaultValue="Sairoden12"
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>

        <button type="submit" className="btn btn-block">
          Explore the app
        </button>

        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </StyledLogin>
  );
}

const StyledLogin = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    align-items: center;
    margin-bottom: 0.5rem;
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

export default Login;
