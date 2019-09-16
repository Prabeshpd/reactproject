import React from "react";

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fields, data } = this.props;
    if (!fields) fields = fields.split(",");
  }
}

export default TableContainer;
