import buddha from "../img/buddha.jpg";
import React, { Component } from "react";
import { Slider, Slide, Button, Preloader, Row } from "react-materialize";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <section>
        {this.props.startMaster ? (
          <Slider fullscreen indicators height="auto">
            <Slide
              src={buddha}
              title="The history of the Kagyu lineage"
              placement="left"
            >
              Buddhism has its roots in India. The historical Buddha gave a
              great variety of teachings in order to accommodate the different
              capacities of beings. Although he taught only orally, his early
              disciples recorded his instructions in writing and passed them on
              in their original form. Later on, Buddhist masters wrote many
              treatises that explain the Buddha’s teachings. The emphasis was on
              the authentic and accurate transmission of the teachings.
              Throughout the centuries, as disciples became teachers, different
              lines of transmission came about, each with their own
              characteristics.
              <br />
              <br />

                <NavLink to='/tree'>
                  <Button className="red" waves="light" style={{marginRight: '10px'}}>
                    Refuge Tree
                  </Button>
                </NavLink>



              <NavLink to={"/masters/" + this.props.startMaster.name}>
                <Button className="red" waves="light">
                  Masters
                </Button>
              </NavLink>

            </Slide>
          </Slider>
        ) : (
          <Row className="container section full-width valign-wrapper">
              <Preloader className="loader" flashing size="big"/>
          </Row>
        )}
      </section>
    );
  }
}

export default Home;
