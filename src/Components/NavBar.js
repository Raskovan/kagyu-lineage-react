import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Input } from 'react-materialize';


const Nav = (props) => {

  const handleInput = e => {
    props.search(e)
  }

  return (
    <Navbar brand='Kagyu Lineage' right fixed className="red">
      <li><Input s={4} label="Search" icon="search" onChange={handleInput}/></li>
      <li><NavLink to="/masters">All Masters</NavLink></li>
    </Navbar>
  )
}

export default Nav
