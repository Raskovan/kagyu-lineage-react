import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const Nav = () => {
  return (
    <Navbar brand='Kagyu Lineage' right fixed className="red">
      <NavItem>All Masters</NavItem>
    </Navbar>
  )
}

export default Nav
