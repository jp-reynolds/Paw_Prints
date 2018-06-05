import React, { Component } from 'react';
import { PageHeader, Image } from 'react-bootstrap';
import InputForm from '../inputForm/InputForm'
import './Home.css'

class Home extends Component {
  render() {
    return (
    	<div className="homeContainer">
    	    <PageHeader className="pageHeader">
  			   Paw Prints <small>share dog-friendly locations in CO</small>
		      </PageHeader>
			   <div className="otisHeader">
        	<Image className="otisPicture" src="https://i.imgur.com/OVqUxJS.jpg?1" responsive />
        	<h5 className="otisText">"Hey y'all! My name is Otis and my owner created this site so pups like me can play outside too!" - Otis</h5>
         </div>
         <InputForm/>
    	</div>
    );
  }
}

export default Home;

//go back and refactor so that you only make one axios call to all of your places on the home page
//then filter by type (park, hike, camp) and pass in those value as props to the components here.  
//figure out a more dynamic way to display the information of the page with some sort of toggle feature
//instead of navigating to a different page....tabs? hidden? carousel?