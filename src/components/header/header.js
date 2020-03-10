import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const Header = () => (
	<Container fluid className="bg-info">
		<Container>
			<Navbar className="px-0">
			    <Nav className="mr-auto">
			      	<NavLink className="nav-link text-light" to="/">Home</NavLink>
      				<NavLink className="nav-link text-light" to="contact">Contato</NavLink>
			    </Nav>
		  </Navbar>
		</Container>
	</Container>
);

export default Header;