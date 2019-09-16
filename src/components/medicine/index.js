import React from "react";
import TableContainer from "../../utils/table";
import Paging from "../../utils/paging";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: "name,start_date,end_date,is_active,actions",
      data: {},
      totalLength: null,
      pageLength: 20,
      skip: null,
      page: null
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(number) {
    let skip = this.state.page * parseInt(number);
    let page = parseInt(number);
    this.setState({ ...this.state }, skip, page);
  }

  render() {
    let { data, totalLength, skip, page } = this.props;
    this.setState({ ...this.state }, data, totalLength, skip, page);
    return (
      <div className="container">
        <div className="header">
          <h1>Task List</h1>
        </div>
        <div className="table-container">
          <table className="table">
            <tr>
              <th ref="name">Name</th>
              <th ref="type">Type</th>
              <th ref="frequency">Frequency</th>
              <th ref="is_active">Is Active</th>
              <th ref="intake_time">Intake Time</th>
              <th ref="actions">Actions</th>
            </tr>
            <TableContainer field={this.state.fields} data={this.state.data} />
          </table>
        </div>
        <div className="table-footer">
          <Paging
            totalLength={this.state.totalLength}
            pageLength={this.pageLength}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Table;
