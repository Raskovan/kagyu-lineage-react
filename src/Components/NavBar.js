import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Input } from 'react-materialize';


const Nav = (props) => {

  const handleInput = e => {
    props.search(e)
  }

  // const handleSubmit = e => {
  //   props.searchSubmit(e)
  // }

  return (
    <Navbar brand={<NavLink to ="/">Kagyu Lineage</NavLink>} right fixed className="red">

      <li><Input s={4} label="Search" icon="search" onChange={handleInput} exact to="/masters"/></li>

      <li><NavLink exact to="/masters">All Masters</NavLink></li>
    </Navbar>
  )
}

export default Nav
