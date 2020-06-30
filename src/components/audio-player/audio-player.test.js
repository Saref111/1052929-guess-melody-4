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
        src={mock.song.src}
        isPlaying={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
