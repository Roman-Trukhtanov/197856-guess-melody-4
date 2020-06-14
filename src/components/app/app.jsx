import React, {Component} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onWelcomeButtonClick = this.onWelcomeButtonClick.bind(this);
  }

  onWelcomeButtonClick() {}

  render() {
    const {errorsAmount} = this.props;

    return (
      <WelcomeScreen errorsAmount={errorsAmount} onWelcomeButtonClick={this.onWelcomeButtonClick}/>
    );
  }
}

App.propTypes = {
  errorsAmount: PropTypes.number.isRequired,
};

export default App;
