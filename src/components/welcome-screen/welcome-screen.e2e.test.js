import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test WelcomeScreen component`, () => {
  it(`Click welcome button`, () => {
    const onWelcomeButtonClickHandler = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          mistakes={3}
          onWelcomeButtonClickHandler={onWelcomeButtonClickHandler}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`);

    expect(onWelcomeButtonClickHandler.mock.calls.length).toBe(1);
  });
});

