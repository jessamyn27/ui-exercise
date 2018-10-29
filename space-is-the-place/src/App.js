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
// decoding GUIID
const Base64 = require('js-base64').Base64;
// using async to load user data and decode first
const async = require('async');

class App extends Component {
    constructor() {
        super();

        this.state = {
            space: [],
            entries: [],
            assets: []
        }
    }

    loadingComplete() {
        this.setState({entries: this.entries,})
    }

    processEntries(entriesJson) {
        let entries = []
        for (let i = 0; i < entriesJson.items.length; i++) {

            let fields = entriesJson.items[i].fields
            let sys = entriesJson.items[i].sys

            let entry = {
                id: sys['id'],
                // title: Base64.decode(fields['title']),
                // summary: Base64.decode(fields['body']),
                createdBy: sys['createdBy'],
                updatedBy: sys['updatedBy'],
                updatedAt: sys['updatedAt'],
            }
            entries.push(entry)
        }

        async.forEachOf(entries, (value, key, callback) => {
            // TODO Cache users so repeated lookups are minimized.
            //console.log(value)
            fetch("http://localhost:3000/users/" + value['updatedBy'])
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    value['updatedBy'] = json.fields.name
                })
                .then(() => {
                    return fetch("http://localhost:3000/users/" + value['createdBy'])
                })
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    value['createdBy'] = json.fields.name
                    callback()
                })
        }, (err, results) => {
            console.log("All done")
            this.setState({entries: entries})
        })
    }

    // processAssets(assetsJson) {
    //     let assets = []
    //     for (let i = 0; i < assetsJson.items.length; i++) {
    //
    //         let fields = assetsJson.items[i].fields
    //         let sys = assetsJson.items[i].sys
    //
    //         let asset = {
    //             id: sys['id'],
    //             // title: fields['title'],
    //             // summary: Base64.decode(fields['body']),
    //             createdBy: sys['createdBy'],
    //             updatedBy: sys['updatedBy'],
    //             // updatedAt: sys['updatedAt'],
    //         }
    //         assets.push(asset)
    //     }
    //     async.forEachOf(assets, (value, key, callback) => {
    //         // TODO Cache users so repeated lookups are minimized.
    //         //console.log(value)
    //         fetch("http://localhost:3000/users/" + value['updatedBy'])
    //             .then((response) => {
    //                 return response.json()
    //             })
    //             .then((json) => {
    //                 value['updatedBy'] = json.fields.name
    //             })
    //             .then(() => {
    //                 return fetch("http://localhost:3000/users/" + value['createdBy'])
    //             })
    //             .then((response) => {
    //                 return response.json()
    //             })
    //             .then((json) => {
    //                 value['createdBy'] = json.fields.name
    //                 callback()
    //             })
    //     }, (err, results) => {
    //         console.log("All done")
    //         this.setState({assets: assets})
    //     })
    // }

    componentDidMount(){
        // TODO Pass in space id to query for this specific space
        fetch("http://localhost:3000/space/yadj1kx9rmg0/entries")
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.processEntries(json)
            })
            // fetch("http://localhost:3000/space/yadj1kx9rmg0/assets")
            //     .then((res) => {
            //         return res.json()
            //     })
            //     .then((json) => {
            //         this.processEntries(json)
            //     })
  }

  render() {
    console.log(this.state, 'inside app component render');
    return (
      <div className="App">
        <Sidebar />
      <div className="App container">
        {/* <Table1 fields={this.state.entries} sys={this.state.entries}/> */}
        {/* <Table2 fields={this.state.entries} sys={this.state.entries}/> */}
        <SpaceOne entries={this.state.entries} assets={this.state.assets}/>

{/* <Switch>
<Route exact path='/myfirstspace' component={SpaceOne}/>
<Route exact path='/mysecondspace' component={SpaceTwo} />
<Route exact path='/mythirdspace' component={SpaceThree} />
</Switch> */}

      </div>
    </div>);
  }
}
export default App;

// past test fetch calls

// componentDidMount(){
//   fetch("http://localhost:3000/space/").then((res) => {
//   //   return res.json();
//   // }).then((json) => {
//   //   let entries = []
//   //   let assets = []
//   //   for (let i = 0; i < json.items.length; i++) {
//   //   entries.push(json.items[i].fields)
//   //   assets.push(json.items[i].sys)
//   //   }
//   //   console.log(entries, assets, ' entries and assets ');
//   //   this.setState({space: json.items, entries: entries, assets: assets})
//   //   console.log(json.items, 'inside cDM');
//   // });
//   fetch("http://localhost:3000/space/yadj1kx9rmg0/entries").then((res) => {
//     return res.json();
//   }).then((json) => {
//     let entries = []
//     for (let i = 0; i < json.items.length; i++) {
//       fetch("http://localhost:3000/users").then((res) => {})
//     entries.push({
//       id: json.items[i].sys['id'],
//       title: json.items[i].sys['title'],
//       summary: json.items[i].sys['body'],
//       createdAt: json.items[i].sys['createdAt'],
//       createdBy: json.items[i].sys['createdBy'],
//       updatedBy: json.items[i].sys['updatedBy'],
//     })
//     }
//     console.log(entries, ' entries  ');
//     this.setState({space: json.items, entries: entries})
//     console.log(json.items, 'fetch entries');
//   });
//
//
//   fetch("http://localhost:3000/space/yadj1kx9rmg0/assets").then((res) => {
//     return res.json();
//   }).then((json) => {
//     let assets = []
//     for (let i = 0; i < json.items.length; i++) {
//     assets.push(json.items[i].fields)
//     assets.push(json.items[i].sys)
//     }
//     console.log(assets, ' assets  ');
//     this.setState({space: json.items, assets: assets})
//     console.log(json.items, 'fetch assets');
//   });
//   }
//
