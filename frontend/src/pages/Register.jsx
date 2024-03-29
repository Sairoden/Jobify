// REACT & LIBRARIES
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// STYLES
import styled from "styled-components";

// COMPONENTS
import { Logo, FormRow, SubmitButton } from "../components";

// HOOKS
import { useRegister } from "../hooks";

function Register() {
  const { register, handleSubmit } = useForm();
  const { register: submitRegister, isPending } = useRegister();

  const handleRegister = async data => {
    submitRegister(data);
  };

  return (
    <StyledRegister>
      <form className="form" onSubmit={handleSubmit(handleRegister)}>
        <Logo />
        <h4>Register</h4>

        <FormRow
          type="text"
          labelText="First Name"
          register={register}
          id="name"
        />

        <FormRow
          type="text"
          labelText="Last Name"
          register={register}
          id="lastName"
        />

        <FormRow
          type="text"
          labelText="Location"
          register={register}
          id="location"
        />

        <FormRow
          type="email"
          labelText="Email"
          register={register}
          id="email"
        />

        <FormRow
          type="password"
          name="password"
          labelText="Password"
          register={register}
          id="password"
        />

        <SubmitButton isPending={isPending} />

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

export default Register;
