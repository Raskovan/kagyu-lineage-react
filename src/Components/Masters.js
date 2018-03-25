import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Slide, Slider, Button } from "react-materialize";
import buddha from "../img/buddha.jpg";

class Masters extends Component {
  render() {
    const masterImg=this.props.master.img_url
    const nameYears=this.props.master.name + " " + this.props.master.years_lived
    console.log(masterImg);
    return (
      <section>
        <Slider fullscreen indicators height="auto">
          {this.props.master ? (
            <Slide
              title={nameYears}
              src={
                masterImg !== "" ? require(`../img/${masterImg}`) : require(`../img/buddha.jpg`)

              }
              placement="left">
              {this.props.master.description}
              <br />
              <br />
              {this.props.nextMaster ? (
                <div>
                  {this.props.prevMaster ? (
                    <NavLink to={"/masters/" + this.props.prevMaster.name}>
                      <Button
                        className="grey"
                        waves="light"
                        icon="navigate_before"
                      />
                    </NavLink>
                  ) : null}

                  <NavLink to={"/masters/" + this.props.nextMaster.name}>
                    <Button
                      className="red"
                      waves="light"
                      icon="navigate_next"
                    />
                  </NavLink>
                </div>
              ) : (
                <NavLink to={"/masters/" + this.props.prevMaster.name}>
                  <Button
                    className="grey"
                    waves="light"
                    icon="navigate_before"
                  />
                </NavLink>
              )}
            </Slide>
          ) : null}
        </Slider>
      </section>
    );
  }
}

export default Masters;
