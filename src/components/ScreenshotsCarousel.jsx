import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingIndicator from "./LoadingIndicator";

function ScreenshotsCarousel({ screenshots }) {
  const [activeScreenshot, setActiveScreenshot] = useState(
    screenshots.results[0].image
  );

  useEffect(() => {}, [activeScreenshot]);

  if (screenshots) {
    return (
      <StyledScreenshotsWrapper>
        <div className="active-img">
          <img src={activeScreenshot} alt="screenshot" />
        </div>
        <div className="all-imgs">
          {screenshots.results.map((screenshot) => (
            <img
              onClick={() => {
                setActiveScreenshot(screenshot.image);
                console.log(activeScreenshot);
              }}
              key={screenshot.id}
              src={screenshot.image}
              alt="hey"
              className={activeScreenshot === screenshot.image ? "active" : ""}
            />
          ))}
        </div>
      </StyledScreenshotsWrapper>
    );
  } else {
    return <LoadingIndicator />;
  }
}

export default ScreenshotsCarousel;

const StyledScreenshotsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .active-img {
    width: 100%;
    max-width: 1300px;
  }

  .all-imgs {
    width: 100%;
    display: flex;
    gap: 5px;
    overflow-x: scroll;
    padding: 8px 0px;

    &::-webkit-scrollbar {
      height: 8px;
      background: #ffffff11;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      height: 5px;
      background: #f04b41;
      border-radius: 5px;
    }

    img {
      width: 150px;
      opacity: 0.6;
      transform: scale(1);
      transition: opacity 0.2s ease, transform 0.2s ease;
      cursor: pointer;

      &.active {
        transform: scale(0.95);
        opacity: 1;
        border: 1.5px solid #fff;
      }
    }
  }

  img {
    width: 100%;
    display: block;
  }
`;
