import React from "react";

class TaskDetail extends React.Component {
  constructor() {
    super(props);
    this.state = {
      name: this.props.name,
      startDate: this.props.start_date,
      endDate: this.props.end_date,
      formData: null
    };
    this.onChange = this.onChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onChange(e) {
    let value = e.target.value;
    let target = e.target.name;
    let formData = Object.assign({}, this.state.formData, { [target]: value });
    this.setState({ [target]: value, formData });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.refs.frmAddTask.reset();
  }

  render() {
    return (
      <div className="container">
        <div className="header">Set Goal For Yourself</div>
        <div className="form-container">
          <form className="form" ref="frmAddTask" onSubmit={this.handleFormSubmit}>
            <label className="label">Name:</label>
            <input type="text" ref="name" onChange={this.handleChange} value={this.state.name} />
            <label className="label">Start Date:</label>
            <input
              type="date"
              ref="startDate"
              className="date"
              onChange={this.handleChange}
              value={this.state.startDate}
            />
            <label className="label">End Date:</label>
            <input
              type="date"
              ref="endDate"
              className="date"
              onChange={this.handleChange}
              value={this.state.endDate}
            />
            <button type="submit" className="submit"></button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
