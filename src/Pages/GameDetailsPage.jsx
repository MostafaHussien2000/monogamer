import styled from "styled-components";

import React from "react";

function GameDetailsPage() {
  return (
    <StyledMainWrapper>
      <h1>Game Details</h1>
    </StyledMainWrapper>
  );
}

export default GameDetailsPage;

const StyledMainWrapper = styled.main`
  background-color: #000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  * {
    color: #fff;
  }

  h4 {
    font-size: 22px;
    margin: 3px;
    font-weight: 500;
  }

  p {
    opacity: 0.9;
    font-weight: 300;
  }
`;
