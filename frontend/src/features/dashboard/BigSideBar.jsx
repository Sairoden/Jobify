// STYLES
import styled from "styled-components";

function BigSideBar() {
  return <StyledBigSideBar>BigSideBar</StyledBigSideBar>;
}

const StyledBigSideBar = styled.aside`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.1);
  }
`;

export default BigSideBar;
