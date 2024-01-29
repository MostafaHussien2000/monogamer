import React from "react";
import styled from "styled-components";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { connect } from "react-redux";

import { fetchGameDetail } from "../redux";
import { Link } from "react-router-dom";

function GameCard({
  setShowGameDetails,
  showGameDetails,
  name,
  banner,
  date,
  id,
  dispatchGameDetails,
}) {
  const loadDetailsHandler = () => {
    if (!showGameDetails) {
      dispatchGameDetails(id);
      setShowGameDetails(true);
    }
  };

  return (
    <center>
      <StyledGameCard>
        <div className="img-wrapper">
          <img src={banner} alt={`${name} wallpaper`} />
        </div>
        <div className="content">
          <div className="text">
            <h1>{name}</h1>
            <p>{date}</p>
          </div>
          <Link to={`/game/${id}`}>
            <button onClick={loadDetailsHandler}>
              <HiOutlineArrowNarrowRight />
            </button>
          </Link>
        </div>
      </StyledGameCard>
    </center>
  );
}

const mapStateToProps = (state) => {
  return {
    gameDetail: state.details.game_details,
    gameScreenshots: state.details.game_screenshots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGameDetails: (game_id) => dispatch(fetchGameDetail(game_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);

const StyledGameCard = styled.div`
  background: #bcc2d4;
  padding: 0px 20px;
  padding-bottom: 10px;
  border-radius: 12px;
  max-width: 400px;

  .img-wrapper {
    min-height: 150px;
  }

  * {
    text-align: left;
  }

  &:hover {
    img {
      transform: scale(1.15);
      transition: transform 0.2s ease-in-out;
    }
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    top: 0px;
    border-radius: 8px;
    box-shadow: 10px 10px 10px #080c1652;
    transform-origin: 100% 100%;
    transform: translateY(-10px) scale(1.1);
    background: #3a3d49;
  }

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: #131620;

    overflow: hidden;
    text-overflow: clip;
  }

  p {
    color: #656a7a;
    font-weight: 500;
    font-size: 15px;
    margin: 7px 0px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    width: 35px;
    height: 35px;
    background: #f04b41;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #c7322a;
    }
  }
`;
