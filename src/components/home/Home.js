import React, { Component } from 'react';
import { PageHeader, Image } from 'react-bootstrap';
import InputForm from '../inputForm/InputForm'
import './Home.css'

class Home extends Component {
  render() {
    return (
    	<div className="homeContainer">
    	    <PageHeader className="pageHeader">
  			   <i className="fas fa-paw"></i>Paw Prints<i className="fas fa-paw"></i> <small>share dog-friendly locations in CO</small>
		      </PageHeader>
			   <div className="otisHeader">
        	<Image className="otisPicture" src="https://i.imgur.com/OVqUxJS.jpg?1" responsive />
        	<h5 className="otisText">"Hey y'all! My name is Otis and my owner created this site so pups like me can play outside too!"</h5>
         <InputForm/>
         </div>

         <div className="links">
            <a className="homeObject" href='/park'>
                <div className="buttonContainer">
                  <Image className="homeImage" id="park" src="http://www.screengeek.net/wp-content/uploads/2016/07/Marvel-Comics-Villains-List.jpg" />
                  <h1 className="centered"> Parks</h1>
                </div>
            </a>
            <a className="homeObject" href='/hike'>
              <div className="buttonContainer">
                <Image className="homeImage" id="hike" src="https://i.imgur.com/1YXduuB.jpg" />
                <h1 className="centered"> Hikes</h1>
              </div>
            </a>
            <a className="homeObject" href='/camp'>
              <div className="buttonContainer">
                <Image className="homeImage" id="camp" src="https://i.imgur.com/Ul81qaF.jpg" />
                <h1 className="centered"> Camp</h1>
              </div>
            </a>
         </div>
         
    	</div>
    );
  }
}

export default Home;

//go back and refactor so that you only make one axios call to all of your places on the home page
//then filter by type (park, hike, camp) and pass in those value as props to the components here.  
//figure out a more dynamic way to display the information of the page with some sort of toggle feature
//instead of navigating to a different page....tabs? hidden? carousel?