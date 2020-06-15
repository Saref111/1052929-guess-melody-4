import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test WlcomeScreen component`, () => {
  it(`Click welcome button`, () => {
    const onWelcomeButtonClickHandler = jest.fn();

    const weclomeScreen = shallow(
        <WelcomeScreen
          mistakes={3}
          welcomeButtonClickHandler={onWelcomeButtonClickHandler}
        />
    );

    const welcomeButton = weclomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`);

    expect(onWelcomeButtonClickHandler.mock.calls.length).toBe(1);
  });
});

