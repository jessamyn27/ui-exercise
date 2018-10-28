import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {Tab, Tabs, Nav, NavItem, Navbar, NavDropdown, MenuItem, Header, Brand} from 'react-bootstrap';

import Table1 from './Table1';
import Table2 from './Table2';

// var data = [
//   {
//     title: 1,
//     summary: 'example summary 1',
//     createdBy: 'jessa rae',
//     updatedBy: 'dyna',
//     lastUpdated: '10-26-2018'
//   }, {
//     title: 2,
//     summary: 'example summary 2',
//     createdBy: 'jessamyn',
//     updatedBy: 'pina',
//     lastUpdated: '10-27-2018'
//   }, {
//     title: 3,
//     summary: 'example summary 3',
//     createdBy: 'jessatwiggle',
//     updatedBy: 'bambino',
//     lastUpdated: '10-29-2018'
//   }
// ];

class SpaceTwo extends Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'title',
    };

    this.state = {
      space: [],
      }
    }

  render() {
    return (
      <div>
        {/* <NavItem eventKey={1} title="Nav 1" > */}
          My Second Space
          <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title='Tab 1'>
              <p className="Table-header">Entries</p>
              <Table1 />
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

export default SpaceTwo;
