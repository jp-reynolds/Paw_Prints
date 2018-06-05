import React, { Component } from 'react';
import Place from '../place/Place';
import Weather from '../weather/Weather';
import InputForm from '../inputForm/InputForm'
import axios from 'axios'
import './Park.css'

class Park extends Component {

	constructor() {
		super();
		this.state = {
			places: {
				data: []
			},
		};
	}

	componentDidMount() {
		axios.get("/api/places/park").then((results) => {
			this.setState({
				places: results
			});
			console.log(results)
		});
	}

  render() {
  	let listOfParks = this.state.places.data.map((parkObject, index) => {
  		return  <li className="parkObject" key = {index}>
  					<Place
	  					name={parkObject.name}
	  					city={parkObject.city}
	  					description={parkObject.description}
	  					elevation={parkObject.elevation}
	  					image={parkObject.image}
	  					comments={[parkObject.comments]}
	  				/>
				</li>
  	})

    return (
      <div className="parkContainer">
        <h3 className="parkTitle">Parks page</h3>
        <ul className="parkList">{listOfParks}</ul>
        <InputForm/>
      </div>
    );
  }
}

export default Park;