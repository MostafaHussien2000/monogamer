import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <center>
        <p>
          API by <span>Rawg.io</span>
        </p>
      </center>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 50px;
  padding: 10px 5px;
  background: #f04b41;
  bottom: 0px;
  left: 0px;
  right: 0px;

  * {
    color: #fff;
    font-size: 16px;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    display: inline-block;
  }
`;
