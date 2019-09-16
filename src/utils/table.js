import React from "react";

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      totalLength: null,
      fields: null,
      pageLength: null,
      skip: null,
      page: null
    };
  }

  renderTable(data, index) {
    return Object.keys(data.slice(this.state.skip, this.state.skip + this.state.pageLength)).map(
      (d, i) => {
        for (let field of this.state.fields) {
          if (d === field) return <td key={d + "_" + i}>{d}</td>;
        }
      }
    );
  }

  getTableData() {
    const { fields, data, totalLength, pageLength, skip, page } = this.props;
    if (!fields) throw new Error("Must send required fields name");
    fields = fields.split(",");
    this.setState({ ...this.state }, totalLength, pageLength, skip, page);
    let tableData = [];

    for (let datum of data) {
      let keys = Object.keys(datum);
      let rowObject = {};
      if (this.props.setObjectData) this.props.setObjectData(datum, rowObject);
      if (this.props.setDateData) this.props.setDateData(datum, rowObject);
      if (this.props.setAction) this.props.setAction(datum, rowObject);
      for (let key of keys) {
        if (datum[key] !== null) {
          if (
            (typeof datum[key] === "string" || typeof datum[key] === "number") &&
            fields.includes(key)
          )
            rowObject[key] = datum[key];
          if (Array.isArray(datum[key]) && fields.includes(key))
            rowObject[key] = datum[key].join(",");
          if (datum[key] === null && fields.includes(key)) rowObject[key] = "N/A";
          if (typeof datum[key] === "object") {
            let nestedKeys = Object.keys(datum[key]);
            for (let nestedkey of nestedKeys) {
              if (
                (typeof datum[key][nestedkey] === "string" || typeof datum[key] === "number") &&
                fields.includes(nestedkey)
              )
                rowObject[nestedkey] = datum[key][nestedkey];
              if (Array.isArray(datum[key][nestedkey]) && fields.includes(nestedkey))
                rowObject[nestedkey] = datum[key][nestedkey].join(",");
              if (datum[key][nestedkey] === null && fields.includes(nestedkey))
                rowObject[nestedkey] = "N/A";
            }
          }
        }
      }
      tableData.push(rowObject);
    }
    this.setState({ ...this.state }, tableData);
  }

  render() {
    let data = this.getTableData();
    data = this.state.tableData
      .slice(this.state.skip, this.state.skip + this.state.pageLength)
      .map((data, i) => {
        <tr key={data + "_" + i}>{this.renderTable(data, i)}</tr>;
      });
    return data;
  }
}

export default TableContainer;
