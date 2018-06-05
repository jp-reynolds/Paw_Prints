import React, { Component } from 'react';
import Place from '../place/Place';
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
		axios.get("/api/places/hike").then((results) => {
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
        <p>This is the Hike page.</p>
        <ul>{listOfHikes}</ul>
      </div>
    );
  }
}

export default Hike;