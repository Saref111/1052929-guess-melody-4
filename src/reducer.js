import {extend} from "./utils.js";

const initialState = {
  mistakes: 0,
  step: -1
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MiSTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`
};

const reducer = (state = initialState, action) => {
  switch (Selection.type) {
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        step: state.mistakes + action.mistakes,
      });
    case ActionType.INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.step,
      });
  }

  return state;
};

export {ActionType, reducer};
