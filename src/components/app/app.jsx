import React, {Component} from 'react';
import WelcomeScreen from "../welcome-screen/welcome-screen";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {errorsAmount} = this.props;

    return (
      <WelcomeScreen errorsAmount={errorsAmount}/>
    );
  }
}

export default App;
