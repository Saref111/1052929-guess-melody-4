import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mock/questions.js";

const MOCK = {
  MISTAKES: 3,
  onWelcomeButtonClickHandler: () => {},
};

ReactDOM.render(
    <App
      mistakes={MOCK.MISTAKES}
      onWelcomeButtonClickHandler={MOCK.onWelcomeButtonClickHandler}
      questions={questions}
      onAnswer={() => {}}
    />,
    document.querySelector(`#root`)
);
