import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

ReactDOM.render(
    <App mistakes="5" />,
    document.querySelector(`#root`)
);
