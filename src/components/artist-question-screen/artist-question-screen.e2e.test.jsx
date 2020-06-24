import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

configure({adapter: new Adapter()});

const mockArtist = {
  question: {
    type: `artist`,
    song: {
      artist: ``,
      src: ``
    },
    answers: [
      {
        artist: `one`,
        picture: `icon-one`,
      },
      {
        artist: `two`,
        picture: `icon-two`,
      },
      {
        artist: `three`,
        picture: `icon-three`,
      },
    ],
  }
};

it(`Should answer the question`, () => {
  const {question} = mockArtist;
  const onAnswer = jest.fn();
  const userAnswer = {
    artist: `one`,
    picture: `icon-one`,
  };

  const screen = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, {
    preventDefault() {}
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
