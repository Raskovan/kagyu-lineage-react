import buddha from '../img/buddha.jpg';
import React, {Component} from 'react';
import { Slider, Slide, Button } from 'react-materialize';
import { NavLink } from "react-router-dom";


class Home extends Component{


  render(){
  return (
    <section>
      <Slider
        fullscreen
        indicators
        height = "auto"
        >
        <Slide
          src={buddha}
          title="The history of the Kagyu lineage"
          placement="left"
          >
          Buddhism has its roots in India.
          The historical Buddha gave a great variety of teachings in order to accommodate the different capacities of beings. Although he taught only orally, his early disciples recorded his instructions in writing and passed them on in their original form. Later on, Buddhist masters wrote many treatises that explain the Buddha’s teachings. The emphasis was on the authentic and accurate transmission of the teachings. Throughout the centuries, as disciples became teachers, different lines of transmission came about, each with their own characteristics.
          <br/><br/>
          <Button className="red" waves='light'>
          <NavLink to="/masters">Explore</NavLink>
        </Button>
        </Slide>

      </Slider>

  </section>
  )
}}

export default Home
