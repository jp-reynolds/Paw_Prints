import React, { Component } from 'react';
import './Weather.css'
import axios from 'axios'

class Weather extends Component {

	constructor() {
		super()
		this.state = {
  			weather: "",
		};
	}

	componentDidMount() {
    //https://marvelcu.herokuapp.com/api/heroes
		axios.get("http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
			this.setState({
				weather: results.data.main
			})
		console.log(results)
		})
	}


  render() {

  	let denverTemp = this.state.weather.temp

    return (
    	<div className="weatherContainer">
        <p>Denver: {denverTemp}˚</p>
      </div>
    );
  }
}

export default Weather;