import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { IoIosArrowBack } from "react-icons/io";
import { FiLink } from "react-icons/fi";
import { FaReddit } from "react-icons/fa";

import SubHeading from "./SubHeading";
import ScreenshotsCarousel from "./ScreenshotsCarousel";

function GameDetails({
  gameDetail,
  gameScreenshots,
  setShowGameDetails,
  setGameDetail,
}) {
  console.table(gameDetail);
  document.body.style.overflowY = "hidden";

  return (
    <StyledGameDetails>
      <div className="img-wrapper">
        <div className="btns">
          <button>
            <IoIosArrowBack
              onClick={() => {
                setShowGameDetails(false);
                setGameDetail = null;
                document.body.style.overflowY = "scroll";
              }}
            />
          </button>
          {/* <button>
            <a href={gameDetail.reddit_url} rel="noreferrer" target="_blank">
              <FaReddit />
            </a>
          </button> */}
          <button>
            {gameDetail.website && (
              <a href={gameDetail.website} rel="noreferrer" target="_blank">
                <FiLink />
              </a>
            )}
          </button>
        </div>
        <img src={gameDetail.background_image} alt="banner" />
      </div>
      <div className="game-info">
        <h1>{gameDetail.name}</h1>
        <p className="date">Published at: {gameDetail.released}</p>
        <SubHeading text="Description" />
        <p className="description">{gameDetail.description_raw}</p>
        {gameScreenshots.results[0] && (
          <div>
            <SubHeading text="Screenshots"></SubHeading>
            <ScreenshotsCarousel
              screenshots={gameScreenshots}
            ></ScreenshotsCarousel>
          </div>
        )}
      </div>
    </StyledGameDetails>
  );
}

const mapStateToProps = (state) => {
  return {
    gameDetail: state.details.game_details,
    gameScreenshots: state.details.game_screenshots,
    setGameDetail: state.details.setGameDetail,
  };
};

export default connect(mapStateToProps)(GameDetails);

const StyledGameDetails = styled.main`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #131620;
  min-height: 50px;

  &::-webkit-scrollbar {
    width: 8px;
    background: #ffffff11;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background: #f04b41;
    border-radius: 5px;
  }

  * {
    color: #fff;
  }

  button {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }

  .img-wrapper {
    position: relative;

    .btns {
      position: absolute;
      width: 100%;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    img {
      width: 100%;
      display: block;
      max-height: 90vh;
      object-fit: cover;
      min-height: 50px;
    }

    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      width: 100%;
      height: 100%;
      background: rgb(19, 22, 32);
      background: linear-gradient(
        180deg,
        rgba(19, 22, 32, 0.7262255243894433) 0%,
        rgba(19, 22, 32, 0) 33%,
        rgba(19, 22, 32, 1) 100%
      );
    }
  }

  .game-info {
    padding: 0px 30px;
    transform: translateY(-30px);

    .date {
      opacity: 0.9;
      font-weight: 300;
    }

    .description {
      margin: 30px 0px;
      padding: 40px;
      background: #ffffff09;
    }
  }
`;
