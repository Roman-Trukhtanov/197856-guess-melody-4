import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {gameSettings} from "./data";
import questions from "./mocks/questions.js";

const rootElement = document.querySelector(`#root`);

const init = () => {
  const {errorsAmount} = gameSettings;

  ReactDOM.render(
      <App
        errorsAmount={errorsAmount}
        questions={questions}
      />,
      rootElement
  );
};

init();
