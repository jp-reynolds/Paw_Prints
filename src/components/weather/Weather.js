import React, { Component } from 'react';
import './Weather.css'
import axios from 'axios'

class Weather extends Component {

	constructor() {
		super()
		this.state = {
  			tempCity: "",
  			iconCity: "",
		};
	}

	componentDidMount() {
    //https://marvelcu.herokuapp.com/api/heroes
		axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.props.city + ",us&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
			let tempCity = results.data.main.temp
			let iconCity = results.data.weather[0].icon
			this.setState({
				tempCity: tempCity,
				iconCity: iconCity
			})
		})
	}


  render() {

  	let city = this.props.city
  	let tempCity = this.state.tempCity
  	let iconCity = this.state.iconCity


    return (
    	<div className="weatherContainer">
        <p>{city}: {tempCity}˚ <img src={"http://openweathermap.org/img/w/" + iconCity + ".png"}/></p>

      </div>
    );
  }
}

export default Weather;