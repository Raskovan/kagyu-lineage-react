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
        this.setState({
          masters: response
        });
      });
  };

  addMaster = newMaster => {
    // console.log("newMaster", newMaster.button);
    // debugger
    if (newMaster.button === "Add") {
      console.log("before order id", typeof newMaster.order_id);

      newMaster.order_id = Number.parseInt(newMaster.order_id, 10);
      console.log("order id", typeof newMaster.order_id);
      console.log(newMaster);
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
    } else if (newMaster.button === "Delete") {
      console.log("Delete", newMaster.name);
      fetch(`https://kagyu-lineage.herokuapp.com/${newMaster.id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(response => this.fetchMasters());
    } else if (newMaster.button === "Update") {
      fetch(`https://kagyu-lineage.herokuapp.com/${newMaster.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accepts: "applicatin/json"
        },
        body: JSON.stringify(newMaster)
      })
        .then(res => res.json())
        .then(json => {
          this.fetchMasters(),
            () => {
              console.log("Update Done", json);
            };
        });
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

  compare = (a, b) => {
    if (a.order_id < b.order_id) return -1;
    if (a.order_id > b.order_id) return 1;
    return 0;
  };

  render() {
    console.log("admincont", this.state);
    const sorted = this.state.masters.sort(this.compare);
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
									<th data-field="img_url">Image</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.masters
                  ? sorted.map(master => {
                      return (
                        <tr key={master.id}>
                          <td>{master.order_id}</td>
                          <td>{master.name}</td>
                          <td>{master.years_lived}</td>
                          <td>{master.description}</td>
													<td>{master.img_url}</td>
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
