import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {gameSettings} from "./data";

const rootElement = document.querySelector(`#root`);

const init = () => {
  const {errorsAmount} = gameSettings;

  ReactDOM.render(
      <App errorsAmount={errorsAmount}/>,
      rootElement
  );
};

init();
