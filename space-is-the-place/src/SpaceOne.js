import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {Tab, Tabs, Nav, NavItem, Navbar, NavDropdown, MenuItem, Header, Brand} from 'react-bootstrap';
import Table1 from './Table1';
import Table2 from './Table2';
import { Link, Route, Switch } from "react-router-dom";


class SpaceOne extends Component {
  constructor(props) {
    super(props);
}
  render() {
    console.log(this.props, 'props for SpaceOne');
    return (
      <div>
        {/* <NavItem eventKey={1} title="Nav 1" > */}
          My First Space
          <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title='Tab 1'>
              <p className="Table-header">Entries</p>
              <BootstrapTable data={this.props.entries} options={this.options} striped hover condensed scrollTop={ 'Bottom' } >
                <TableHeaderColumn isKey dataField='id' dataSort defaultASC>
                  Title
                </TableHeaderColumn>
                <TableHeaderColumn dataField='type' dataSort>
                  Summary
                </TableHeaderColumn>
                <TableHeaderColumn dataField='createdAt' dataSort>
                  Created By
                </TableHeaderColumn>
                <TableHeaderColumn dataField='updatedBy' dataSort>
                  Updated By
                </TableHeaderColumn>
                <TableHeaderColumn dataField='createdBy' dataSort>
                  Last Updated
                </TableHeaderColumn>
              </BootstrapTable>
              {/* <Table1 data={this.props.sys}/> */}
            </Tab>
            <Tab eventKey={2} title='Tab 2'>
              <p className="Table-header">Assets</p>
              <BootstrapTable data={this.props.entries} options={this.options} striped hover condensed scrollTop={ 'Bottom' } >
                <TableHeaderColumn isKey dataField='title' dataSort defaultASC>
                  Title
                </TableHeaderColumn>
                <TableHeaderColumn dataField='contentType' dataSort>
                  Content Type
                </TableHeaderColumn>
                <TableHeaderColumn dataField='fileName' dataSort>
                  File Name
                </TableHeaderColumn>
                <TableHeaderColumn dataField='upload' dataSort>
                  Upload
                </TableHeaderColumn>
                <TableHeaderColumn dataField='updatedBy' dataSort>
                  Updated By
                </TableHeaderColumn>
                <TableHeaderColumn dataField='lastUpdated' dataSort>
                  Last Updated
                </TableHeaderColumn>
              </BootstrapTable>
              {/* <Table2 /> */}
            </Tab>
          </Tabs>
        {/* </NavItem> */}
      </div>
    );
  }
}

export default SpaceOne;

// getSpace = {
//     const spaceData = await
//     fetch("http://localhost:3000/space/", {
//       method: 'GET',
//       credentials: 'include'});
//       const getSpaceJson = await spaceData.json();
//       console.log(getSpaceJson);
//       return getSpaceJson
//     }
