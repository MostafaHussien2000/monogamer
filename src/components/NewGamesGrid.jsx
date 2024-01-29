import React from "react";

import { connect } from "react-redux";

import LoadingIndicator from "./LoadingIndicator";
import styled from "styled-components";
import GameCard from "./GameCard";

function NewGamesGrid({ gamesData, showGameDetails, setShowGameDetails }) {
  return (
    <div>
      {gamesData.loading ? (
        <LoadingIndicator />
      ) : gamesData.error ? (
        <p>{gamesData.error}</p>
      ) : (
        <StyledGirdWrapper>
          {gamesData.new_games.results.map((game) => (
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

export default connect(mapStateToProps)(NewGamesGrid);

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
