import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MOCK = {
  MISTAKES: 5,
  onWelcomeButtonClickHandler: () => {},
};

ReactDOM.render(
    <App mistakes={MOCK.MISTAKES} onWelcomeButtonClickHandler={MOCK.onWelcomeButtonClickHandler}/>,
    document.querySelector(`#root`)
);
