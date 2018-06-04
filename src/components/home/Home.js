import React, { Component } from 'react';
import { PageHeader, Image } from 'react-bootstrap';
import './Home.css'
import Weather from '../weather/Weather';

class Home extends Component {
  render() {
    return (
    	<div className="homeContainer">
    	<PageHeader className="pageHeader">
  			Paw Prints <small>share dog-friendly locations in CO</small>
		</PageHeader>
			<div className="otisHeader">
        	<Image className="otisPicture" src="https://i.imgur.com/OVqUxJS.jpg?1" responsive />
        	
        		<h4 className="otisText">"Hey y'all! My name is Otis and my owner created this site so pups like me can play outside too!" - Otis</h4>
        	</div>
        	<Weather />
    	</div>
    );
  }
}

export default Home;