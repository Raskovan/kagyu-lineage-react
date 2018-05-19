import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Masters from "./Components/Masters";
import MastersContainer from "./Containers/MastersContainer";
import AdminContainer from "./Containers/AdminContainer";
import TreeContainer from "./Containers/TreeContainer";


import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    masters: [],
    filter: ""
  };

  componentDidMount() {
    fetch(`https://kagyu-lineage.herokuapp.com/`)
      .then(res => res.json())
      .then(response => {
        this.setState(
          {
            masters: response
          }
        );
      });
  }

  handleSearchInput = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterResults() {
    let filtered = this.state.masters.filter(master => {
      const masterLowerCase = master.name.toLowerCase();
      return masterLowerCase.includes(this.state.filter.toLowerCase());
    });
    return filtered;
  }

  compare = (a, b) => {
    if (a.order_id < b.order_id) return -1;
    if (a.order_id > b.order_id) return 1;
    return 0;
  };

  render() {
    let results = this.filterResults();
    // console.log("filter", this.state.filter);

    const sorted = this.state.masters.sort(this.compare);

    return (
      <div className="App">
        <NavBar search={this.handleSearchInput} />
        {this.state.filter ? <Redirect to="/masters" /> : null}
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              let firstMaster = this.state.masters.find(master => {
                return master.order_id === 1;
              });
              return <Home startMaster={firstMaster} />;
            }}
          />

          <Route
            exact
            path="/tree"
            render={props => <TreeContainer masters={results}/>}
          />


          <Route
            exact
            path="/masters"
            render={props => <MastersContainer masters={results} />}
          />

          <Route exact path="/admin" component={AdminContainer} />

          {this.state.masters.length > 0 ? (
            <Route
              exact
              path="/masters/:name"
              render={renderProps => {
                /// Find me the master for this id
                let name = renderProps.match.params.name;
                // console.log("renderProps", renderProps.match.params.name);
                // I have the name
                let foundMasterIndex = sorted.findIndex(master => {
                  return master.name === name;
                });

                let foundMaster = this.state.masters[foundMasterIndex];
                let nextMaster = this.state.masters[foundMasterIndex + 1];
                let previousMaster =
                  foundMasterIndex > 0
                    ? this.state.masters[foundMasterIndex - 1]
                    : null;
                // {
                //   console.log("order", previousMaster, foundMaster, nextMaster);
                // }
                // whats your index
                /// therefore whats the next index
                /// who is the next index

                return (
                  <Masters
                    master={foundMaster}
                    nextMaster={nextMaster}
                    prevMaster={previousMaster}
                  />
                );
              }}
            />
          ) : null}
        </Switch>
      </div>
    );
  }
}

export default App;
