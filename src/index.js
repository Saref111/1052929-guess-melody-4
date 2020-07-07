import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import questions from "./mock/questions.js";
import {reducer} from "./reducer.js";

const MOCK = {
  MISTAKES: 3,
  onWelcomeButtonClickHandler: () => {},
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store} >
      <App
        mistakes={MOCK.MISTAKES}
        onWelcomeButtonClickHandler={MOCK.onWelcomeButtonClickHandler}
        questions={questions}
        onAnswer={() => {}}
      />
    </Provider>,
    document.querySelector(`#root`)
);
