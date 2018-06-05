import React, { Component } from 'react';
import Place from '../place/Place';
import Weather from '../weather/Weather';
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
		axios.get("/api/places/camp").then((results) => {
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
	  					name={campObject.name}
	  					city={campObject.city}
	  					description={campObject.description}
	  					elevation={campObject.elevation}
	  					image={campObject.image}
	  					comments={[campObject.comments]}
	  				/>
	  				<Weather
	  					city={campObject.city}
	  				/>
				</li>
  	})

    return (
    	<div className="parkContainer">
        <p>This is the camp page.</p>
        <ul>{listOfCamps}</ul>
      </div>
    );
  }
}

export default Camp;