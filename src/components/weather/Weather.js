import React, { Component } from 'react';
import './Weather.css'
import axios from 'axios'

class Weather extends Component {

	constructor() {
		super()
		this.state = {
  			weatherDenver: "",
  			weatherBoulder: "",
  			weatherCosprings: "",
  			weatherFoco: "",
  			weatherKeystone: "",
		};
	}

	componentDidMount() {
    //https://marvelcu.herokuapp.com/api/heroes
		axios.get("http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
			this.setState({
				weatherDenver: results.data.weather[0].icon
			})
		console.log(results)
		})

		axios.get("http://api.openweathermap.org/data/2.5/weather?q=Boulder&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
			this.setState({
				weatherBoulder: results.data.main
			})
		console.log(results)
		})

		// axios.get("http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
		// 	this.setState({
		// 		weatherDenver: results.data.main
		// 	})
		// console.log(results)
		// })

		// axios.get("http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
		// 	this.setState({
		// 		weatherDenver: results.data.main
		// 	})
		// console.log(results)
		// })

		// axios.get("http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
		// 	this.setState({
		// 		weatherDenver: results.data.main
		// 	})
		// console.log(results)
		// })
	}


  render() {

  	let denverTemp = this.state.weatherDenver
  	let denverIcon = this.state.weatherDenver
  	let boulderTemp = this.state.weatherBoulder.temp

    return (
    	<div className="weatherContainer">
        <p>Denver: {denverTemp}˚</p>
        <img src={"http://openweathermap.org/img/w/" + denverTemp + ".png"}/>
        <p>Boulder: {boulderTemp}˚</p>
      </div>
    );
  }
}

export default Weather;