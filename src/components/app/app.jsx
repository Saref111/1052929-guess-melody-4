import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = ({mistakes, welcomeButtonClickHandler}) => {
  return (
    <WelcomeScreen mistakes={mistakes} welcomeButtonClickHandler={welcomeButtonClickHandler} />
  );
};

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  welcomeButtonClickHandler: PropTypes.func.isRequired,
};

export default App;

