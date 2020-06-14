import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {mistakes} = props;
  return (
    <WelcomeScreen mistakes={mistakes} />
  );
};

export default App;

