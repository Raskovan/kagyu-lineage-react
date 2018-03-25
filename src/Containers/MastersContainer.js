import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-materialize";
import { Route, Link } from "react-router-dom";

class MastersContainer extends Component {

	compare = (a, b) => {
		if (a.order_id < b.order_id) return -1;
		if (a.order_id > b.order_id) return 1;
		return 0;
	};

  render() {
		const sorted = this.props.masters.sort(this.compare);
    return (
      <Row>
        {this.props.masters
          ? sorted.map(master => {
              const nameAndYears = master.name + " " + master.years_lived;
              return (
                <Col m={3} key={master.id}>
                  <Link to={`/masters/${master.name}`}>
                    <Card
											className="white"
                      textClassName="grey-text"
                      title={nameAndYears}
                    >
                      {master.description}
                    </Card>
                  </Link>
                </Col>
              );
            })
          : null}
      </Row>
    );
  }
}

export default MastersContainer;
