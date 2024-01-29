import React from "react";
import styled from "styled-components";

function Headings() {
  return (
    <StyledHeading>
      <h1>
        Play, <span>Explore</span> and Experience gaming at Home.
      </h1>
      <p>
        Access programmatically the best free-to-play games and free MMO games!
        The Free-To-Play Games Database API (Aka FreeToGame API) is available
        for everyone to use without any restrictions. Please note our API is
        free to use as long as you attribute FreeToGame.com as the source of the
        data. We hope to improve the API over time.
      </p>
    </StyledHeading>
  );
}

export default Headings;

const StyledHeading = styled.div`
  padding: 50px 0px;
  /* --auto-grid-min-size: 5rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  align-self: center;
  gap: 70px;
  width: 100%; */

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  * {
    max-width: 500px;
    width: 100%;
    min-width: 200px;
  }

  h1 {
    font-weight: 800;
    font-size: 40px;

    span {
      color: #f04b41;
    }
  }

  p {
    opacity: 0.6;
    font-size: 14px;
  }
`;
