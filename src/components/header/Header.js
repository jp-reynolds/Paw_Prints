import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
    	<Navbar>
	  		<Navbar.Header>
    			<Navbar.Brand>
      				<a href="#home">Paw Prints</a>
    			</Navbar.Brand>
  			</Navbar.Header>
	  		<Nav pullRight>
	  	  		<NavItem eventKey={1} href="#">
	      			Park
	    		</NavItem>
	    		<NavItem eventKey={2} href="#">
	     			Hike
	    		</NavItem>
	    		<NavItem eventKey={3} href="#">
	     			Camp
	    		</NavItem>
	  		</Nav>
		</Navbar>
    );
  }
}

export default Header;