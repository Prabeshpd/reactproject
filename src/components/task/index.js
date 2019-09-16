import React from "react";
import TableContainer from "../../utils/table";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: "name,start_date,end_date,is_active,actions", data: {} };
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
              <th ref="name">Name</th>
              <th ref="start_date">Start Date</th>
              <th ref="end_date">End Date</th>
              <th ref="is_active">Is Active</th>
              <th ref="actions">Actions</th>
            </tr>
            <TableContainer field={this.state.fields} data={this.state.data} />
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
