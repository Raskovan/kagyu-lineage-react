import React, { Component } from 'react';
import './App.css';
import Nav from './Components/NavBar'
import Home from './Components/Home'
import MastersContainer from './Containers/MastersContainer'

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="App">
          < Nav />
          <div>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/masters" component={MastersContainer}/>
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
