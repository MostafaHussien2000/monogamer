import React from "react";

import { connect } from "react-redux";

import LoadingIndicator from "./LoadingIndicator";
import styled from "styled-components";
import GameCard from "./GameCard";

function PopularGamesGrid({ gamesData, showGameDetails, setShowGameDetails }) {
  return (
    <div>
      {gamesData.loading ? (
        <LoadingIndicator />
      ) : gamesData.error ? (
        <p>{gamesData.error}</p>
      ) : (
        <StyledGirdWrapper>
          {gamesData.popular_games.results.map((game) => (
            <GameCard
              setShowGameDetails={setShowGameDetails}
              showGameDetails={showGameDetails}
              key={game.id}
              id={game.id}
              name={game.name}
              banner={game.background_image}
              date={game.released}
            />
          ))}
        </StyledGirdWrapper>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  gamesData: state.games,
});

export default connect(mapStateToProps)(PopularGamesGrid);

const StyledGirdWrapper = styled.section`
  padding: 50px 0px;
  --auto-grid-min-size: 18rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );

  align-content: center;
  align-self: center;
  gap: 50px 45px;
  width: 100%;
`;

/*
 <StyledGirdWrapper>
      {gamesData.loading ? (
        <LoadingIndicator />
      ) : gamesData.error ? (
        <p>{gamesData.error}</p>
      ) : (
        gamesData.games.results.map((game) => (
          <div
            className="game-card"
            style={{
              background: "#cccccc29",
              borderRadius: "5px",
              padding: "10px",
              margin: 20,
            }}
          >
            <p key={game.name}>{game.name}</p>
          </div>
        ))
      )}
    </StyledGirdWrapper>



*/
