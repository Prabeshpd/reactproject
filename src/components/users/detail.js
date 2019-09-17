import React from "react";

class UserDetail extends React.Component {
  constructor() {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      roles: this.props.roles,
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
    this.refs.frmUserUpdate.reset();
  }

  render() {
    return (
      <div className="container">
        <div className="header">Set Goal For Yourself</div>
        <div className="form-container">
          <form className="form" ref="frmUserUpdate" onSubmit={this.handleFormSubmit}>
            <label className="label">Name:</label>
            <input type="text" ref="name" onChange={this.handleChange} value={this.state.name} />
            <label className="label">Email:</label>
            <input
              type="text"
              ref="email"
              onChange={this.handleChange}
              value={this.state.startDate}
            />
            <label className="label">End Date:</label>
            <input
              type="date"
              ref="phone"
              onChange={this.handleChange}
              value={this.state.endDate}
            />
            <label className="label">Roles</label>
            <input type="text" ref="roles" onChange={this.handleChange} value={this.roles} />
            <button type="submit" className="submit"></button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserDetail;
