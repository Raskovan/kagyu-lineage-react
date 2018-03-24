import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/NavBar";
import Home from "./Components/Home";
import Masters from "./Components/Masters";
import MastersContainer from "./Containers/MastersContainer";
import AdminContainer from "./Containers/AdminContainer";

import { Route, Switch, Link, Redirect } from "react-router-dom";

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
					},
					() => {
						// console.log(this.state.masters)
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

	render() {
		let results = this.filterResults();
    console.log("filter",this.state.filter);



		return (
			<div className="App">
				<Nav search={this.handleSearchInput} />
				// {console.log(this.state.filter)}
				{this.state.filter ? <Redirect to="/masters"/> : null}
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
            path="/masters"
            render={props => <MastersContainer masters={results} />}
          />

					<Route exact path="/admin" component={AdminContainer} />

			{this.state.masters.length > 0 ?
        <Route
						exact
						path="/masters/:name"
						render={renderProps => {
							/// Find me the master for this id
							let name = renderProps.match.params.name;

							// I have the name
							let foundMasterIndex = this.state.masters.findIndex(master => {
								return master.name === name;
							});

							let foundMaster = this.state.masters[foundMasterIndex];
							let nextMaster = this.state.masters[foundMasterIndex + 1];
							let previousMaster =
								foundMasterIndex > 0
									? this.state.masters[foundMasterIndex - 1]
									: null;

							// whats your index
							/// therefore whats the next index
							/// who is the next index

							return (
								<Masters
									master={foundMaster}
									nextMaster={nextMaster}
									prevMaster={previousMaster}
								/>
							)
						}}
					/> : null }

				</Switch>
			</div>
		);
	}
}

export default App;
