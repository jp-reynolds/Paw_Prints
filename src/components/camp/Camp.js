import React, { Component } from 'react';
import Place from '../place/Place';
import Weather from '../weather/Weather';
import InputForm from '../inputForm/InputForm'
import axios from 'axios'
import './Camp.css'

class Camp extends Component {

	constructor() {
		super();
		this.state = {
			places: {
				data: []
			},
		};
	}

	componentDidMount() {
		//https://dogadventure.herokuapp.com/api/places/camp
		axios.get("https://dogadventure.herokuapp.com/api/places/camp").then((results) => {
			this.setState({
				places: results
			});
			console.log(results)
		});
	}

  render() {
  	let listOfCamps = this.state.places.data.map((campObject, index) => {
  		return  <li className="campObject" key = {index}>
  					<Place
  						likes={campObject.likes}
  						dislikes={campObject.dislikes}
	  					name={campObject.name}
	  					city={campObject.city}
	  					description={campObject.description}
	  					elevation={campObject.elevation}
	  					image={campObject.image}
	  					comments={[campObject.comments]}
	  				/>
				</li>
  	})

    return (
    	<div className="parkContainer">
        <h1 className="campTitle">Camp</h1>
        <ul className="campList">{listOfCamps}</ul>
        <InputForm/>
      </div>
    );
  }
}

export default Camp;