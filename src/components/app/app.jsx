import React from "react";
import PropTypes, {object} from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import {QUESTION_TYPES} from "../../const.js";


const App = ({mistakes, onWelcomeButtonClickHandler, questions}) => {
  const artistQuestion = [...questions].find((it) => it.type === QUESTION_TYPES.ARTIST);
  const genreQuestion = [...questions].find((it) => it.type === QUESTION_TYPES.GENRE);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen mistakes={mistakes} onWelcomeButtonClickHandler={onWelcomeButtonClickHandler} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen question={artistQuestion} />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen question={genreQuestion} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  onWelcomeButtonClickHandler: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(object).isRequired,
};

export default App;

