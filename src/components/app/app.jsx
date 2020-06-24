import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import PropTypes from "prop-types";
import GameScreen from "../game-screen/game-screen";
import {GameType} from "../../data";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      step: -1
    };

    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._handleAnswer = this._handleAnswer.bind(this);
  }

  _handleButtonClick() {
    this.setState({
      step: 0,
    });
  }

  _handleAnswer() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  _checkWelcomeScreen(questions) {
    const {step} = this.state;

    return step < 0 || step >= questions.length;
  }

  _renderGameScreen() {
    const {
      errorsAmount,
      questions
    } = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (this._checkWelcomeScreen(questions)) {
      return (
        <WelcomeScreen
          errorsAmount={errorsAmount}
          onWelcomeButtonClick={this._handleButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
            >
              <ArtistQuestionScreen
                question={question}
                onAnswer={this._handleAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
            >
              <GenreQuestionScreen
                question={question}
                onAnswer={this._handleAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <GameScreen
              type={GameType.ARTIST}
            >
              <ArtistQuestionScreen
                question={questions[0]}
                onAnswer={() => {}}
              />
            </GameScreen>
          </Route>
          <Route exact path="/dev-genre">
            <GameScreen
              type={GameType.GENRE}
            >
              <GenreQuestionScreen
                question={questions[1]}
                onAnswer={() => {}}
              />
            </GameScreen>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsAmount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
