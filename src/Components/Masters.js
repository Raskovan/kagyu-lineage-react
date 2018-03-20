import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import { Slide, Slider, Button } from 'react-materialize';
import buddha from '../img/buddha.jpg';



class Masters extends Component{

  render(){

  // console.log(this.props)
  return (
  <section>
  <Slider
    fullscreen
    indicators
    height = "auto"
    >
    { this.props.master ?
      <Slide
        title={this.props.master.name}
        src=""
        placement="left"
      >
      {this.props.master.description}
      <br/><br/>
      {this.props.nextMaster ?
      <NavLink to={"/masters/" + this.props.nextMaster.name}>
      <Button className="red" waves='light'>Next
      </Button></NavLink> : <NavLink to={"/masters/" + this.props.prevMaster.name}><Button className="red" waves='light'>Previous</Button></NavLink>}
      </Slide> : null
    }
    </Slider>
  </section>
  )
}}

export default Masters
