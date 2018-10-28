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
              <Table1 data={this.props.sys}/>
            </Tab>
            <Tab eventKey={2} title='Tab 2'>
              <p className="Table-header">Assets</p>
              <Table2 />
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
