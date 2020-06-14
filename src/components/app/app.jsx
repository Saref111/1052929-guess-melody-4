import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = ({mistakes}) => {
  return (
    <WelcomeScreen mistakes={mistakes} />
  );
};

App.propTypes = {
  mistakes: PropTypes.string.isRequired
};

export default App;

