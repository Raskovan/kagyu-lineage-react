import React, {Component} from 'react';
import { Slide, Slider, Button } from 'react-materialize';
import buddha from '../img/buddha.jpg';



class Masters extends Component{

  render(){

  // console.log(this.props)
  return (
  <section>
    { this.props.master ?
      <Slide
        title={this.props.master.name}
        src=""
        placement="left"
      >
      {this.props.master.description}
      <br/><br/>
      <Button className="red" waves='light'>Next</Button>
      </Slide> : null
    }

  </section>
  )
}}

export default Masters
