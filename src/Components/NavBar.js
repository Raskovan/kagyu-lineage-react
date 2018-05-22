import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Input } from 'react-materialize'

const Nav = props => {
	const handleInput = e => {
		props.search(e)
	}

	// const handleSubmit = e => {
	//   props.searchSubmit(e)
	// }

	return (
		<Navbar brand="Kagyu Lineage" right fixed className="red">
			<li>
				<Input
					s={4}
					label="Search"
					icon="search"
					onChange={handleInput}
					exact="/masters"
				/>
			</li>

			<li>
				<NavLink exact to="/tree">
					Refuge Tree
				</NavLink>
			</li>

			<li>
				<NavLink exact to="/masters">
					All Masters
				</NavLink>
			</li>

			<li>
				<NavLink exact to="/admin">
					Admin
				</NavLink>
			</li>
		</Navbar>
	)
}

export default Nav
