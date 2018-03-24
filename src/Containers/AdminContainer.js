import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Form from "../Components/Form";
import { Card, Col, Row, Input, Table, Button } from "react-materialize";

class AdminContainer extends Component {
	state = {
		masters: [],
		masterToEdit: {},
		action: ""
	};

	componentDidMount() {
		this.fetchMasters();
	}

	fetchMasters = () => {
		fetch(`https://kagyu-lineage.herokuapp.com/`)
			.then(res => res.json())
			.then(response => {
				this.setState(
					{
						masters: response
					}
				);
			});
	};

	addMaster = newMaster => {
		if (this.state.action === "Add") {
			fetch(`https://kagyu-lineage.herokuapp.com/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accepts: "applicatin/json"
				},
				body: JSON.stringify(newMaster)
			})
				.then(res => res.json())
				.then(json => {
					this.setState(
						{
							masters: [...this.state.masters, json]
						},
						() => {
							console.log("addMasterState", this.state.masters);
						}
					);
				});
		} else if (this.state.action === "Delete") {
			console.log("Delete", newMaster.name);
			fetch(`https://kagyu-lineage.herokuapp.com/${newMaster.id}`, {
				method: "DELETE"
			})
				.then(res => res.json())
				.then(response => this.fetchMasters());
		} else if (this.state.action === "Update") {
			console.log("Update", newMaster.name);
		}
	};

	handleEdit = master => {
		this.setState({
			masterToEdit: master
		});
	};

	handleDelete = actionName => {
		console.log("Action", actionName.name);
		this.setState({
			action: actionName.name
		});
	};

	render() {
		console.log("admincont", this.state);
		return (
			<section>
				<Row>
					<Col s={4}>
						<Form
							onSubmit={this.addMaster}
							editMaster={this.state.masterToEdit}
							onAction={this.handleDelete}
						/>
					</Col>
					<Col s={8}>
						<Table striped bordered>
							<thead>
								<tr>
									<th data-field="order_id">Place</th>
									<th data-field="name">Name</th>
									<th data-field="years_lived">Years lived</th>
									<th data-field="description">Description</th>
									<th />
								</tr>
							</thead>
							<tbody>
								{this.state.masters
									? this.state.masters.map(master => {
											return (
												<tr key={master.id}>
													<td>{master.order_id}</td>
													<td>{master.name}</td>
													<td>{master.years_lived}</td>
													<td>{master.description}</td>
													<td>
														<Button
															floating
															large
															className="red"
															waves="light"
															icon="edit"
															onClick={() => this.handleEdit(master)}
														/>
													</td>
												</tr>
											);
									  })
									: null}
							</tbody>
						</Table>
					</Col>
				</Row>
			</section>
		);
	}
}

export default AdminContainer;
