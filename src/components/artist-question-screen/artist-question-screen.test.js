import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/0.1230494858`,
    artist: `John Snow`,
  }, {
    picture: `https://api.adorable.io/avatars/128/0.4648392`,
    artist: `Jack Daniels`,
  }, {
    picture: `https://api.adorable.io/avatars/128/0.765657594`,
    artist: `Jim Beam`,
  }],
};

describe(`Testing ArtistQuestionScreen`, () => {
  it(`ArtistQuestionScreen snapshot-test`, () => {
    const tree = renderer.create(<ArtistQuestionScreen
      question={question} onAnswer={() => {}}
      onButtonClick={() => {}}
      renderPlayer={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
