import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, data };
  }

  showModal() {
    this.setState({ ...this.state }, { show: true });
  }

  hideModal() {
    this.setState({ ...this.state }, { show: false });
    this.props.formRef.reset();
  }

  render() {
    return {};
  }
}
