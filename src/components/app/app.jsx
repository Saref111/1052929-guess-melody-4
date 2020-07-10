import React, {PureComponent} from "react";
import PropTypes, {object} from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import GameScreen from "../game-screen/game-screen.jsx";
import {QUESTION_TYPES} from "../../const.js";
import withActivePlayer from "../../hocs/with-active-player.jsx";

const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);


class App extends PureComponent {
  _renderGameScreen() {
    const {maxMistakes, questions, step, onWelcomeButtonClickHandler, onAnswer} = this.props;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          mistakes={maxMistakes}
          onWelcomeButtonClickHandler={onWelcomeButtonClickHandler}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case QUESTION_TYPES.ARTIST:
          return (
            <GameScreen type={question.type}>
              <ArtistQuestionScreenWrapped
                question={question}
                onAnswer={onAnswer}
              />
            </GameScreen>
          );
        case QUESTION_TYPES.GENRE:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={onAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions, onAnswer} = this.props;

    const artistQuestion = [...questions].find((it) => it.type === QUESTION_TYPES.ARTIST);
    const genreQuestion = [...questions].find((it) => it.type === QUESTION_TYPES.GENRE);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <GameScreen type={artistQuestion.type}>
              <ArtistQuestionScreenWrapped
                question={artistQuestion}
                onAnswer={onAnswer}
              />
            </GameScreen>
          </Route>
          <Route exact path="/dev-genre">
            <GameScreen type={genreQuestion.type}>
              <GenreQuestionScreenWrapped
                question={genreQuestion}
                onAnswer={onAnswer}
              />
            </GameScreen>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onWelcomeButtonClickHandler: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(object).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClickHandler() {
    dispatch(ActionCreator.incrementStep());
  },
  onAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

