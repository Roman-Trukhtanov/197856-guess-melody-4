import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

describe(`WelcomeScreen component`, () => {
  it(`Render WelcomeScreen`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorsAmount={3}
        onWelcomeButtonClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
