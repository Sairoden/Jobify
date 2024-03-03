// REACT & LIBRARIES
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// STYLES
import styled from "styled-components";

// COMPONENTS
import { Logo, FormRow, SubmitButton } from "../components";

// HOOKS
import { useLogin } from "../hooks";

function Login() {
  const { register, handleSubmit } = useForm();
  const { login, isPending } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async data => {
    login(data);
  };

  return (
    <StyledLogin>
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <Logo />
        <h4>Login</h4>

        <FormRow
          type="email"
          labelText="Email"
          defaultValue="odingandarosa@gmail.com"
          register={register}
          id="email"
        />

        <FormRow
          type="password"
          name="password"
          labelText="Password"
          defaultValue="Sairoden12"
          register={register}
          id="password"
        />

        <SubmitButton formBtn isPending={isPending} />

        <button
          onClick={() => navigate("/dashboard")}
          className="btn btn-block"
        >
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
