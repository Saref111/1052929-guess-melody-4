import {extend} from "./utils.js";
import {QUESTION_TYPES} from "./const.js";

const initialState = {
  mistakes: 0,
  step: -1
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`
};

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });
    case ActionType.INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.payload,
      });
  }

  return state;
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  incrementMistake: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case QUESTION_TYPES.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case QUESTION_TYPES.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
};

export {ActionType, reducer, ActionCreator};
