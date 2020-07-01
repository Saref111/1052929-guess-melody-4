import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player.jsx";

const mock = {
  song: {
    src: `src`
  }
};

test(`Audioplayer snap test`, () => {
  const tree = renderer.create(
      <AudioPlayer
        onButtonClick={() => {}}
        src={mock.song.src}
        isPlaying={false}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
