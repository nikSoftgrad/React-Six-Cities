import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FavoriteScreen from "../favorites-screen/favorites-screen";
import RoomScreen from "../room-screen/room-screen";

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offers={offers}/>
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoriteScreen />
        </Route>
        <Route exact path="/offer">
          <RoomScreen />
        </Route>
        <Route
          render={() => (
            <React.Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </React.Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "price": PropTypes.number.isRequired,
        "title": PropTypes.string.isRequired,
        "type": PropTypes.string.isRequired,
        "img": PropTypes.string.isRequired,
        "rating": PropTypes.number.isRequired,
        "is_favorite": PropTypes.bool.isRequired,
        "is_premium": PropTypes.bool.isRequired,
      })
  )
};

export default App;
