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
          {gamesData.upcoming_games.results.map((game) => (
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

// import { fetchUpComingGames } from "../redux";

// import LoadingIndicator from "./LoadingIndicator";
// import styled from "styled-components";
// import GameCard from "./GameCard";

// function UpComingGamesGrid({ dispatchGames, gamesData }) {
//   useEffect(() => {
//     dispatchGames(fetchUpComingGames());
//   }, []);

//   return (
//     <div>
//       {gamesData.loading ? (
//         <LoadingIndicator />
//       ) : gamesData.error ? (
//         <p>{gamesData.error}</p>
//       ) : (
//         <StyledGirdWrapper>
//           {gamesData.games.upcoming.results.map((game) => (
//             <GameCard
//               key={game.id}
//               name={game.name}
//               banner={game.background_image}
//               date={game.released}
//             />
//           ))}
//         </StyledGirdWrapper>
//       )}
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   gamesData: state.games,
// });

// const mapDispatchToProps = (dispatch) => ({
//   dispatchGames: (func) => dispatch(func),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UpComingGamesGrid);

// const StyledGirdWrapper = styled.section`
//   padding: 50px 0px;
//   --auto-grid-min-size: 18rem;
//   display: grid;
//   grid-template-columns: repeat(
//     auto-fill,
//     minmax(var(--auto-grid-min-size), 1fr)
//   );

//   align-content: center;
//   align-self: center;
//   gap: 50px 45px;
//   width: 100%;
// `;
