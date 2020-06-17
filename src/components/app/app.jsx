import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

const App = ({mistakes, onWelcomeButtonClickHandler}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen mistakes={mistakes} onWelcomeButtonClickHandler={onWelcomeButtonClickHandler} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  onWelcomeButtonClickHandler: PropTypes.func.isRequired,
};

export default App;

