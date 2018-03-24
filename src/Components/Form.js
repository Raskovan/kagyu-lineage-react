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
      img_url: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log("RECEIVING NEW PROPS", nextProps)
    this.setState({
      id: nextProps.editMaster.id,
      order_id: nextProps.editMaster.order_id,
      name: nextProps.editMaster.name,
      years_lived: nextProps.editMaster.years_lived,
      description: nextProps.editMaster.description,
      img_url: nextProps.editMaster.img_url,
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

	handleInput = e => {
		this.setState(
			{
				[e.target.name]: e.target.value
			},
			() => {
				console.log(this.state);
			}
		);
	};

  handleClick = event => {
    // console.log(event.target.name);

    this.props.onAction(event.target)
  }

	handleSubmit = e => {
		e.preventDefault();
		// console.log("form", this.props);
		this.props.onSubmit(this.state);
	};

	render() {
    // console.log("form",this.props.toEdit);
    // if (this.props.toEdit) {
    //   this.populateForm()
    // }
		console.log("editmasteForm", this.state, this.props);
		return (
			<section>
				<form onSubmit={this.handleSubmit}>
					<Row>
						<Input
							s={12}
							label="Position"
							type="number"
							name="order_id"
							defaultValue={this.state.order_id}
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
							onChange={this.handleInput}
						/>
					</Row>
          {!this.state.name ?
					<Button className="red" waves="light" onClick={this.handleClick} name="Add">
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
