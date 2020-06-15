import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MOCK = {
  MISTAKES: 5,
  welcomeButtonClickHandler: () => {},
};

ReactDOM.render(
    <App mistakes={MOCK.MISTAKES} welcomeButtonClickHandler={MOCK.welcomeButtonClickHandler}/>,
    document.querySelector(`#root`)
);
