import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import offersPropsTypes from "../../prop-types/offers";
import MainScreen from "../pages/main-screen/main-screen";
import AuthScreen from "../pages/auth-screen/auth-screen";
import FavoriteScreen from "../pages/favorites-screen/favorites-screen";
import RoomScreen from "../pages/room-screen/room-screen";
import NotFoundPage from "../pages/not-found-page/not-found-page";


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
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offersPropsTypes).isRequired,
};

export default App;
