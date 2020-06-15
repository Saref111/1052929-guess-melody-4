import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

describe(`Testing App`, () => {
  it(`Render App`, () => {
    const tree = renderer.create(
        <App mistakes={3} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
