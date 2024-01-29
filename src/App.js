import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchGames } from "./redux";

/*Import Components
=======================*/
import Home from "./Pages/HomePage";
import LoaderScreen from "./Pages/LoaderScreen";
import { Route } from "react-router";

function App({ gamesData, dispatchGames }) {
  // Loading Setup

  useEffect(() => {
    dispatchGames();
  }, []);

  return (
    <div className="App">
      <Route path={["/game/:id", "/"]}>
        {gamesData.loading ? <LoaderScreen /> : <Home />}
      </Route>
    </div>
  );
}

const mapStateToProps = (state) => ({
  gamesData: state.games,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGames: () => dispatch(fetchGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
