import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./utils/error";

class Welcome extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <h1>Welcome</h1>
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById("app"));
