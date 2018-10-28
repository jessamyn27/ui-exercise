import React, {Component} from 'react';
import './App.css';
import Routes from "./Routes";
import Sidebar from "./Sidebar";
import SpaceOne from "./SpaceOne";
import SpaceTwo from "./SpaceTwo";
import SpaceThree from "./SpaceThree";

import Table1 from './Table1';
import Table2 from './Table2';
import { Link, Route, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {Tab, Tabs, Nav, NavItem, Navbar, NavDropdown, MenuItem, Header, Brand} from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();

  this.state = {
    space: [],
    fields: [],
    sys: []
    }
  }
componentDidMount(){
  fetch("http://localhost:3000/space/").then((res) => {
    return res.json();
  }).then((json) => {
    let fields = []
    let sys = []
    for (let i = 0; i < json.items.length; i++) {
    fields.push(json.items[i].fields)
    sys.push(json.items[i].sys)
    }
    console.log(fields, sys, ' fields and sys');
    this.setState({space: json.items, fields: fields, sys: sys})
    console.log(json.items, 'inside cDM');
  });
  // fetch("http://localhost:3000/space/yadj1kx9rmg0/entries").then((res) => {
  //   return res.json();
  // }).then((json) => {
  //   let fields = []
  //   let sys = []
  //   for (let i = 0; i < json.items.length; i++) {
  //   fields.push(json.items[i].fields)
  //   sys.push(json.items[i].sys)
  //   }
  //   console.log(fields, sys, ' fields and sys');
  //   this.setState({space: json.items, fields: fields, sys: sys})
  //   console.log(json.items, 'inside NEXT FETCH');
  // });
  // fetch("http://localhost:3000/space/yadj1kx9rmg0/assets").then((res) => {
  //   return res.json();
  // }).then((json) => {
  //   let fields = []
  //   let sys = []
  //   for (let i = 0; i < json.items.length; i++) {
  //   fields.push(json.items[i].fields)
  //   sys.push(json.items[i].sys)
  //   }
  //   console.log(fields, sys, ' fields and sys');
  //   this.setState({space: json.items, fields: fields, sys: sys})
  //   console.log(json.items, 'inside NEXT FETCH');
  // });
  }

  render() {
    console.log(this.state, 'inside app component render');
    return (
      <div className="App">
        <Sidebar />
      <div className="App container">
        <Table1 fields={this.state.fields} sys={this.state.sys}/>
        <Table2 fields={this.state.fields} sys={this.state.sys}/>
<Switch>
<Route exact path='/myfirstspace' fields={this.state.fields} sys={this.state.sys} component={SpaceOne}/>
<Route exact path='/mysecondspace' component={SpaceTwo} />
<Route exact path='/mythirdspace' component={SpaceThree} />
</Switch>

      </div>
    </div>);
  }
}
export default App;
