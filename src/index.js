import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MISTAKES = 5;

ReactDOM.render(
    <App mistakes={MISTAKES} />,
    document.querySelector(`#root`)
);
