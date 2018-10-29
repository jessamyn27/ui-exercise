import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
var Base64 = require('js-base64').Base64;


class Table1 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props, ' table1 props render');
    return (
      <div>
        {/* <h1>These are Space Items</h1> */}
        <BootstrapTable data={this.props.entries} options={this.options} striped hover condensed scrollTop={ 'Bottom' } >
          <TableHeaderColumn isKey dataField='id' dataSort defaultASC>
            Title
          </TableHeaderColumn>
          <TableHeaderColumn dataField='type' dataSort>
            Summary
          </TableHeaderColumn>
          <TableHeaderColumn dataField='createdBy' dataSort>
            Created By
          </TableHeaderColumn>
          <TableHeaderColumn dataField='updatedBy' dataSort>
            Updated By
          </TableHeaderColumn>
          <TableHeaderColumn dataField='updatedAt' dataSort>
            Last Updated
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default Table1;
