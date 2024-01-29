import React from "react";

/*Import Images
=============================*/
import wallpaper from "../image/loadingWallpaper.png";
import logo from "../image/logo.png";

/*Import Styled Components
=============================*/

import styled from "styled-components";
import LoadingIndicator from "../components/LoadingIndicator";

function LoaderScreen() {
  return (
    <StyledMainWrapper>
      <img src={logo} alt="MonoGamer Logo" width="60px" />
      <h4>MonoGamer</h4>
      <p>
        Play, Explore and Experience gaming
        <br /> at Home
      </p>
      <LoadingIndicator />
    </StyledMainWrapper>
  );
}

export default LoaderScreen;

const StyledMainWrapper = styled.main`
  background-image: url(${wallpaper});
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
    text-align: center;
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
