import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorMsg">
          <h2 className="warningMsg" style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error.toString()}
          </h2>
          <div className="Info">{this.state.errorInfo.componentStack}</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
