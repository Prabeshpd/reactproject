import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonClass: null, buttonText: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    let buttonClass = this.state.buttonClass === "active" ? "inactive" : "active";
    let buttonText = this.props.buttonText;
    this.setState({ ...this.state }, buttonClass, buttonText);
    this.props.onPageChange(buttonText);
  }

  render() {
    let { buttonClass, buttonText } = this.props;
    this.setState({ ...this.state }, buttonText, buttonClass);
    return (
      <button className={this.state.buttonClass} onClick={this.handleChange}>
        {this.state.buttonText}
      </button>
    );
  }
}

class Page extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    const value = e.target.value;
    this.setState(state => {
      if (this.state.text === state.text) {
        return null;
      }
      return {
        text: value
      };
    });
  };
  render() {
    return <input onChange={this.onChange} />;
  }
}
class Paging extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalPages: null };
    this.createPaginationBlock = this.createPaginationBlock.bind(this);
  }

  createPaginationBlock() {
    let button = [];
    let prevButton = <Button buttonClass="prev-button" buttonText="Previous" />;
    let nextButton = <Button buttonClass="next-button" buttonText="Next" />;
    button = [...prevButton, ...nextButton];
    for (let i = 1; i <= this.state.totalPages; i++) {
      button.push(
        <Button
          key={i}
          buttonClass="number"
          onPageChange={this.props.onPageChange}
          buttonText={i}
        />
      );
    }
    return button;
  }

  render() {
    let { totalLength, pageLength } = this.props;
    let totalPages = parseInt(parseInt(totalLength) / parseInt(pageLength) + 1);
    this.setState({ ...this.state }, totalPages);

    return <div className="button-pagination">{this.createPaginationBlock()}</div>;
  }
}

export default Paging;
