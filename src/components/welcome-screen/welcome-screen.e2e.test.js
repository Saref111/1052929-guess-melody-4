import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test WlcomeScreen component`, () => {
  it(`Click welcome button`, () => {
    const ononWelcomeButtonClickHandler = jest.fn();

    const weclomeScreen = shallow(
        <WelcomeScreen
          mistakes={3}
          onWelcomeButtonClickHandler={ononWelcomeButtonClickHandler}
        />
    );

    const welcomeButton = weclomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`);

    expect(ononWelcomeButtonClickHandler.mock.calls.length).toBe(1);
  });
});

