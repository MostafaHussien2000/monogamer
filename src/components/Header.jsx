import React from "react";
import styled from "styled-components";

/*Import Icons
=======================*/
import { FiSearch } from "react-icons/fi";

/*Import Images
=======================*/
import logo from "../image/logo.png";

function Header() {
  return (
    <StyledNavBar>
      <StyledLogoWrapper>
        <img src={logo} alt="MonoGamer Logo" width="30px" />
        <h4>MonoGamer</h4>
      </StyledLogoWrapper>
      <StyledSearchWrapper>
        <FiSearch
          style={{
            cursor: "pointer",
            padding: "5px",
          }}
          size="33px"
        />
      </StyledSearchWrapper>
    </StyledNavBar>
  );
}

export default Header;

const StyledNavBar = styled.nav`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  * {
    cursor: pointer;
  }

  h4 {
    font-weight: 400;
    font-size: 18px;
  }
`;

const StyledSearchWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #cccccc34;
  }
`;
