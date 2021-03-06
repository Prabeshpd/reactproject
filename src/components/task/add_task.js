import React from "react";

class TaskAdd extends React.Component {
  constructor() {
    super(props);
    this.state = { name: "", startDate: "", endDate: "", formData: null };
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
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
            <label className="label">Start Date:</label>
            <input
              type="date"
              name="startDate"
              className="date"
              onChange={this.handleChange}
              value={this.state.startDate}
            />
            <label className="label">End Date:</label>
            <input
              type="date"
              name="endDate"
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

export default TaskAdd;
