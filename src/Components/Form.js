import buddha from "../img/buddha.jpg";
import React, { Component } from "react";
import { Card, Col, Row, Input, Button } from "react-materialize";
import { NavLink } from "react-router-dom";

class Form extends Component {
  constructor(props){
    super(props)
    // console.log(props);
    this.state = {
      id: "",
      order_id: "",
      name: "",
      years_lived: "",
      description: "",
      img_url: "",
      button: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log("RECEIVING NEW PROPS", nextProps)
    this.setState({
      id: nextProps.editMaster.id,
      order_id: Number.parseInt(nextProps.editMaster.order_id, 10) || "",
      name: nextProps.editMaster.name || "",
      years_lived: nextProps.editMaster.years_lived || "",
      description: nextProps.editMaster.description || "",
      img_url: nextProps.editMaster.img_url || "",
    })
  }

	// populateForm = () => {
  //   console.log("populateForm");
	// 	this.setState({
	// 		order_id: this.props.editMaster.order_id,
	// 		name: this.props.editMaster.name,
	// 		years_lived: this.props.editMaster.years_lived,
	// 		description: this.props.editMaster.description,
	// 		img_url: this.props.editMaster.img_url
	// 	});
	// };

	handleInput = input => {
	this.setState(
			{
				[input.target.name]: input.target.value
			},
			() => {
				console.log("State", this.state);
			}
		);
	};

  handleClick = event => {
    // console.log(event.target.name);
    this.setState({
      button: event.target.name
    })
  }

	handleSubmit = e => {
		e.preventDefault();
		console.log("form", this.state);
		this.props.onSubmit(this.state);
	};

	render() {

		// console.log("editmasteForm", this.state.order_id);
		return (
			<section>
				<form onSubmit={this.handleSubmit}>
					<Row>
						<Input
							s={12}
							label="Position"
							name="order_id"
							value={this.state.order_id}
							onChange={this.handleInput}
						/>
					</Row>
					<Row>
						<Input
							s={12}
							label="Master name"
							name="name"
							value={this.state.name}
							onChange={this.handleInput}
						/>
					</Row>
					<Row>
						<Input
							s={12}
							label="Years lived"
							name="years_lived"
							value={this.state.years_lived}
							onChange={this.handleInput}
						/>
					</Row>
					<Row>
						<Input
							s={12}
							type="textarea"
							label="Description"
							name="description"
							value={this.state.description}
							onChange={this.handleInput}
						/>
					</Row>
					<Row>
						<Input
							s={12}
							label="Image name"
							name="img_url"
              value={this.state.img_url}
							onChange={this.handleInput}
						/>
					</Row>
          {!this.state.id ?
					<Button className="red" waves="light" name="Add" onClick={this.handleClick}>
						Add
					</Button> :
          <div>
          <Button className="red" waves="light" onClick={this.handleClick} name="Update">
						Update
					</Button>
          <Button className="grey" waves="light" horizontal="true" onClick={this.handleClick} name="Delete">
						Delete
					</Button>
        </div>
        }
				</form>
			</section>
		);
	}
}

export default Form;
