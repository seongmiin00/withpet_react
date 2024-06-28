import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import LoginMenu from './LoginMenu';
import links from '../../constants/NavBarList';
import NavBarUl from './NavBarUl';

function NavBar(){

	return(
		<nav className="navbar navbar-expand-lg nav_bar_style fixed-top pt-4 pb-4" aria-label="Eighth navbar example" style={{backgroundColor: "white"}}>
			<div className="container">
				<Link to="/" className="title">WITHPET</Link>
				<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" 
				aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-collapse collapse" id="navbarsExample07">
					<NavBarUl links={links}></NavBarUl>
					<LoginMenu></LoginMenu>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;