import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

describe(`Testing WelcomeScreen`, () => {
  it(`Render WelcomeScreen`, () => {
    const tree = renderer.create(
        <WelcomeScreen
          mistakes={3}
          welcomeButtonClickHandler={() => {}}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
