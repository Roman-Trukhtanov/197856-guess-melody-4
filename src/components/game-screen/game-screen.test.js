import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen";
import {GameType} from "../../data";

const children = <div className="child">child component</div>;

describe(`GameScreen component`, () => {
  it(`Render GameScreen artist type`, () => {
    const tree = renderer
      .create(<GameScreen
        type={GameType.ARTIST}
      >
        {children}
      </GameScreen>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GameScreen genre type`, () => {
    const tree = renderer
      .create(<GameScreen
        type={GameType.GENRE}
      >
        {children}
      </GameScreen>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
