import React, {PureComponent} from "react";
import PropTypes, {object} from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import GameScreen from "../game-screen/game-screen.jsx";
import {QUESTION_TYPES} from "../../const.js";
import withActivePlayer from "../../hocs/with-active-player.jsx";

const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  _renderGameScreen() {
    const {mistakes, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          mistakes={mistakes}
          onWelcomeButtonClickHandler={() => {
            this.setState({
              step: 0,
            });
          }}
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
                onAnswer={() => {
                  this.setState((prevState) => {
                    return ({
                      step: prevState.step + 1,
                    });
                  });
                }}
              />
            </GameScreen>
          );
        case QUESTION_TYPES.GENRE:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
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
            <ArtistQuestionScreenWrapped
              question={artistQuestion}
              onAnswer={onAnswer}
            />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreenWrapped
              question={genreQuestion}
              onAnswer={onAnswer}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  onWelcomeButtonClickHandler: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(object).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default App;

