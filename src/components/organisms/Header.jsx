import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../logo.svg'

const Header = () => (
	<header className="header">
		<div className="logo">
			<img src={logo} alt="logo" className="logo-svg"/>
		</div>
		<nav className="nav">
			<ul className="nav-list">
				<li className="nav-item">
					<NavLink to="/" exact className="nav-link" activeClassName="active">
						Home
					</NavLink>
					<NavLink to="/posts" className="nav-link" activeClassName="active">
						Posts
					</NavLink>
					<NavLink to="/about" className="nav-link" activeClassName="active">
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
)

export default Header