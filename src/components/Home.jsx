import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col,Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
	render() {
	    return (
	        <Grid>
	           <Jumbotron>
	              <h2>Welcome to bestphotostars</h2>
	              <p>This is my first reactjs code </p>
	            </Jumbotron>
	            <Link to="/about">
	                <Button bsStyle="primary">About Us</Button>
	            </Link>	       
	        </Grid>
	    )
	}
}
