import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mock/questions.js";

const MOCK = {
  MISTAKES: 5,
  onWelcomeButtonClickHandler: () => {},
};

ReactDOM.render(
    <App mistakes={MOCK.MISTAKES} onWelcomeButtonClickHandler={MOCK.onWelcomeButtonClickHandler} questions={questions}/>,
    document.querySelector(`#root`)
);
