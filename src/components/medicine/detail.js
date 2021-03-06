import React from "react";

class MedicineDetail extends React.Component {
  constructor() {
    super(props);
    this.state = {
      name: this.props.name,
      type: this.props.type,
      frequency: this.props.frequency,
      intakeTime: this.props.intakeTime,
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
    this.refs.frmMedicineUpdate.reset();
  }

  render() {
    return (
      <div className="container">
        <div className="header">Set Goal For Yourself</div>
        <div className="form-container">
          <form className="form" ref="frmMedicineUpdate" onSubmit={this.handleFormSubmit}>
            <label className="label">Name:</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
            <label className="label">Type:</label>
            <select
              name="type"
              className="date"
              onChange={this.handleChange}
              value={this.state.type}
            >
              <option value="tablet">Tablet</option>
              <option value="syrup">Syrup</option>
              <option value="inhaler">Inhaler</option>
              <option value="in_solution">In Solution</option>
            </select>
            <label className="label">InTake Time:</label>
            <input
              type="date"
              name="intake_time"
              className="date"
              onChange={this.handleChange}
              value={this.state.intakeTime}
            />
            <button type="submit" className="submit"></button>
          </form>
        </div>
      </div>
    );
  }
}

export default MedicineDetail;
