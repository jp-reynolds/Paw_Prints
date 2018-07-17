import React, { Component } from 'react';
import Place from '../place/Place';
import Weather from '../weather/Weather';
import InputForm from '../inputForm/InputForm'
import axios from 'axios'
import './Hike.css'

class Hike extends Component {

	constructor() {
		super();
		this.state = {
			places: {
				data: []
			},
		};
	}

	componentDidMount() {
		//https://dogadventure.herokuapp.com/api/places/hike
		axios.get("https://dogadventure.herokuapp.com/api/places/hike").then((results) => {
			this.setState({
				places: results
			});
			console.log(results)
		});
	}

  render() {
  	let listOfHikes = this.state.places.data.map((hikeObject, index) => {
  		return  <li className="hikeObject" key = {index}>
  					<Place
  						likes={hikeObject.likes}
  						dislikes={hikeObject.dislikes}
	  					name={hikeObject.name}
	  					city={hikeObject.city}
	  					description={hikeObject.description}
	  					elevation={hikeObject.elevation}
	  					image={hikeObject.image}
	  					comments={[hikeObject.comments]}
	  				/>
				</li>
  	})

    return (
    	<div className="parkContainer">
        <h1 className="hikeTitle">Hike</h1>
        <ul className="hikeList">{listOfHikes}</ul>
        <InputForm/>
      </div>
    );
  }
}

export default Hike;