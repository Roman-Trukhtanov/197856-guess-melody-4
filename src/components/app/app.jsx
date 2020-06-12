import React, {Component} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {errorsAmount} = this.props;

    return (
      <WelcomeScreen errorsAmount={errorsAmount}/>
    );
  }
}

App.propTypes = {
  errorsAmount: PropTypes.number.isRequired,
};

export default App;
