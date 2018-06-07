import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
	return (
		<Navbar inverse collapseOnSelect className="navibar">
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/"><i className="fas fa-paw"></i> Paw Prints</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
			<Nav pullRight>
				<NavItem eventKey={1} href="/park">
					<p className="glyphicon glyphicon-tree-deciduous"></p>Park
				</NavItem>
				<NavItem eventKey={2} href="/hike">
					<p className="glyphicon glyphicon-tree-conifer"></p>Hike
				</NavItem>
				<NavItem eventKey={3} href="/camp">
					<p className="glyphicon glyphicon-tent"></p>Camp
				</NavItem>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
  }
}

export default Header;