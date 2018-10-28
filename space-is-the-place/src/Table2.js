import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var data = [
  {
    title: 1,
    summary: 'example summary 1',
    createdBy: 'jessa rae',
    updatedBy: 'dyna',
    lastUpdated: '10-26-2018'
  }, {
    title: 2,
    summary: 'example summary 2',
    createdBy: 'jessamyn',
    updatedBy: 'pina',
    lastUpdated: '10-27-2018'
  }, {
    title: 3,
    summary: 'example summary 3',
    createdBy: 'jessatwiggle',
    updatedBy: 'bambino',
    lastUpdated: '10-29-2018'
  }
];

class Table2 extends Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'title',
      // defaultSortOrder: 'desc'
    };
  }
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} options={this.options} striped hover condensed scrollTop={ 'Bottom' } >
          <TableHeaderColumn isKey dataField='title' dataSort defaultASC>
            Title
          </TableHeaderColumn>
          <TableHeaderColumn dataField='contentType' dataSort>
            Content Type
          </TableHeaderColumn>
          <TableHeaderColumn dataField='fileName' dataSort>
            File Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='createdBy' dataSort>
            Created By
          </TableHeaderColumn>
          <TableHeaderColumn dataField='updatedBy' dataSort>
            Updated By
          </TableHeaderColumn>
          <TableHeaderColumn dataField='lastUpdated' dataSort>
            Last Updated
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table2;
