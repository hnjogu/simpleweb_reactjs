import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
	render() {
		return (
		    <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Simpleweb</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.collapse>
                	<Nav pullRight>
                	    <NavItem eventkey={1} componentClass={Link} to="/">
                	       Home
                        </NavItem>
                        <NavItem eventkey={2} componentClass={Link} to="/about">
                	       About
                        </NavItem>
                        <NavItem eventkey={3} componentClass={Link} to="/news">
                	       News
                        </NavItem>
                	</Nav>
                </Navbar.collapse>
			</Navbar>			
		);
	}
}