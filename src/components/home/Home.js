import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import InputForm from '../inputForm/InputForm'
import './Home.css'

//<div className="otisHeader">
//<Image className="otisPicture" src="https://i.imgur.com/OVqUxJS.jpg?1" responsive />
         // <h5 className="otisText">"Hey y'all! My name is Otis and my owner created this site so pups like me can play outside too!"</h5>
//</div>
class Home extends Component {
  render() {
    return (
    	<div className="homeContainer">
    	    <h1 className="pageHeader">
  			   <img className="pageHeaderLogo" src="https://i.imgur.com/kBBiAwy.jpg" /> Paw Prints
		      </h1>
			   <h4 className="pageHeaderSlogan">Never leave your pup at home</h4>
        	<Image responsive className="banner" src="https://i.imgur.com/y7CVnQa.jpg"/>
          <p className="description">Here in Colorado, dogs are allowed in many public places but when it comes to the great outdoors there can be a bit more restrictions.  Paw Prints is a place where people can share their favorite dog-friendly locations.</p>
          <hr/>
         <InputForm/>
      
         <div className="">
          <h2 className="titlePlace">Parks</h2>
          <a href="/park"><Image className="bannerPlace" src="https://i.imgur.com/O7cws4K.jpg" responsive /></a>
         </div>

         <div className="">
          <h2 className="titlePlace">Hikes</h2>
          <a href="/hike"><Image className="bannerPlace" src="https://i.imgur.com/9E6Fyby.jpg" responsive /></a>
         </div>

         <div className="bottomPlace">
          <h2 className="titlePlace">Camping Spots</h2>         
          <a href="/camp"><Image className="bannerPlace" src="https://i.imgur.com/Ul81qaF.jpg" responsive /></a>
         </div>

         <div className="otisHeader">
          <Image className="otisPicture" src="https://i.imgur.com/OVqUxJS.jpg?1" responsive />
          <h5 className="otisText">"Hey everyone! My name is Otis and my owner created this site so pups like me can play outside too! Please share your favorite places that get that tail wagging!"</h5>
         </div>
      
         <footer id="footer">
           <h5>Created by JP & Otis</h5>
         </footer>
    	</div>
    );
  }
}

export default Home;

//go back and refactor so that you only make one axios call to all of your places on the home page
//then filter by type (park, hike, camp) and pass in those value as props to the components here.  
//figure out a more dynamic way to display the information of the page with some sort of toggle feature
//instead of navigating to a different page....tabs? hidden? carousel?