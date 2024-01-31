// REACT & LIBRARIES
import { Link, useRouteError } from "react-router-dom";

// STYLES
import styled from "styled-components";

// ASSETS
import errorImg from "../assets/images/not-found.svg";

function Error() {
  const error = useRouteError();

  console.log(error.status === 404);

  if (error.status === 404)
    return (
      <StyledError>
        <div>
          <img src={errorImg} alt="not found" />
          <h3>Ohh! Page not found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </StyledError>
    );

  return (
    <StyledError>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </StyledError>
  );
}

const StyledError = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }

  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Error;
