import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/e/e9/Arthur_Collins%2C_Hello_Ma_Baby.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/e/e9/Arthur_Collins%2C_Hello_Ma_Baby.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/e/e9/Arthur_Collins%2C_Hello_Ma_Baby.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/e/e9/Arthur_Collins%2C_Hello_Ma_Baby.ogg`,
      genre: `rock`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/e/e9/Arthur_Collins%2C_Hello_Ma_Baby.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/A`,
      artist: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/AB`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/AC`,
      artist: `Jim Beam`,
    }],
  },
];

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 0,
      questions
    });

    const tree = renderer
      .create(
          <Provider store={store} >
            <App
              maxMistakes={3}
              questions={questions}
              onAnswer={() => {}}
              onWelcomeButtonClickHandler={() => {}}
              step={-1}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GenreQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3,
      questions,
    });

    const tree = renderer
      .create(
          <Provider store={store} >
            <App
              maxMistakes={3}
              questions={questions}
              onAnswer={() => {}}
              onWelcomeButtonClickHandler={() => {}}
              step={0}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3,
      questions,
    });

    const tree = renderer
      .create(
          <Provider store={store} >
            <App
              maxMistakes={3}
              questions={questions}
              onAnswer={() => {}}
              onWelcomeButtonClickHandler={() => {}}
              step={1}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
