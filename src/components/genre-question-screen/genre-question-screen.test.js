import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen.jsx";

const question = {
  type: `genre`,
  genre: `grindpop`,
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `ragtime`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `siberian post-punk`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `meta-modern folk`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `grindepop`,
    },
  ],
};

describe(`Testing genreQuestionScreen`, () => {
  it(`Render GenreQuestionScreen`, () => {
    const tree = renderer.create(<GenreQuestionScreen
      question={question} onAnswer={() => {}}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
