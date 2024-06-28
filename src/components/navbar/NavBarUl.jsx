import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBarUl(props){
	const [currentPage, setCurrentPage] = useState('');
	const list = [];

	for(let i=0; i<props.links.length; i++){
		let listCont = props.links[i];
		list.push(
			<li className="nav-item">
				<Link className="nav-link a_button" aria-current="page" to={listCont.link} >{listCont.name}</Link>
			</li>
		)
	}

	return(
		<ul className="navbar-nav ms-auto mb-lg-0 me-2">
			{list}
		</ul>
	)
}

export default NavBarUl;