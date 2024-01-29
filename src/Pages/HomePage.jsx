import React, { useState } from "react";

import styled from "styled-components";

import Footer from "../components/Footer";
import PopularGamesGrid from "../components/PopularGamesGrid";
import Header from "../components/Header";
import Headings from "../components/Headings";
import UpComingGamesGrid from "../components/UpComingGamesGrid";
import Navigation from "../components/Navigation";
import NewGamesGrid from "../components/NewGamesGrid";
import GameDetails from "../components/GameDetails";
import { connect } from "react-redux";

function Home({ gameDetail, gameScreenshots }) {
  const [view, setView] = useState("popular");

  const [showGameDetails, setShowGameDetails] = useState(false);

  console.table(gameDetail);

  return (
    <div>
      <StyledMainWrapper>
        <Header />
        <Headings />
        <Navigation view={view} setView={setView} />

        {view === "popular" ? (
          <PopularGamesGrid
            showGameDetails={showGameDetails}
            setShowGameDetails={setShowGameDetails}
          />
        ) : view === "upcoming" ? (
          <UpComingGamesGrid
            showGameDetails={showGameDetails}
            setShowGameDetails={setShowGameDetails}
          />
        ) : view === "new" ? (
          <NewGamesGrid
            showGameDetails={showGameDetails}
            setShowGameDetails={setShowGameDetails}
          />
        ) : null}
      </StyledMainWrapper>
      {gameDetail.name && showGameDetails ? (
        <GameDetails setShowGameDetails={setShowGameDetails} />
      ) : null}
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    gameDetail: state.details.game_details,
    gameScreenshots: state.details.game_screenshots,
  };
};

export default connect(mapStateToProps)(Home);

const StyledMainWrapper = styled.main`
  width: 85%;
  max-width: 2000px;
  margin: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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

  .subheading-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;
