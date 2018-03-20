import React, {Component} from 'react';
import { Slide, Slider, Button } from 'react-materialize';
import buddha from '../img/buddha.jpg';



class MastersList extends Component{

  render(){


  return (
  <section>
    { this.props.allMasters ?
      this.props.allMasters.map(master=>{
        return master.name
      }) : null
    }
  </section>
  )
}}

export default MastersList
