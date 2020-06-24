import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";

const mockQuestion = {
  type: `artist`,
  song: {
    artist: `John Allen`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/0`,
    artist: `Patrick Rey`,
  }, {
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `Jack Daniels`,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `Sara Lance`,
  }],
};

describe(`ArtistQuestionScreen component`, () => {
  it(`Render ArtistQuestionScreen`, () => {
    const tree = renderer.create(
        <ArtistQuestionScreen
          question={mockQuestion}
          onAnswer={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
