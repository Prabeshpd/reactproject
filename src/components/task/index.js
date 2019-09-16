import React from "react";
import TableContainer from "../../utils/table";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: {}, data: {} };
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Task List</h1>
        </div>
        <div className="table-container">
          <table className="table">
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Is Active</th>
              <th>Actions</th>
            </tr>
            <TableContainer field={this.state.fields} data={this.state.data} />
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
