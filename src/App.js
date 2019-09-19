import React from "react";
import Router from "./routes/index";
import Login from "./components/login/login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { verified: false };
  }
  componentWillMount() {}

  render() {
    let component = this.state.verified ? <Router /> : <Login />;
    return component;
  }
}

export default App;
