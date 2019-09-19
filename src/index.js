import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./utils/error";
import { CookiesProvider } from "react-cookie";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import App from "./App";

class Welcome extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById("app"));
