import React, { Component } from 'react';
import './Weather.css'
import axios from 'axios'

class Weather extends Component {

	constructor() {
		super()
		this.state = {
  			tempDenver: "",
  			iconDenver: "",
  			tempBoulder: "",
  			iconBoulder: "",
  			tempCosprings: "",
  			iconCosprings: "",
  			tempFoco: "",
  			iconFoco: "",
  			tempKeystone: "",
  			iconKeystone: ""
		};
	}

	componentDidMount() {
    //https://marvelcu.herokuapp.com/api/heroes
		axios.get("http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
			let tempDenver = results.data.main.temp
			let iconDenver = results.data.weather[0].icon
			this.setState({
				tempDenver: tempDenver,
				iconDenver: iconDenver
			})
		})

		axios.get("http://api.openweathermap.org/data/2.5/weather?q=Boulder&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
			let tempBoulder = results.data.main.temp
			let iconBoulder = results.data.weather[0].icon
			this.setState({
				tempBoulder: tempBoulder,
				iconBoulder: iconBoulder
			})
		})

		axios.get("http://api.openweathermap.org/data/2.5/weather?q=Fort%20Collins&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
			let tempFoco = results.data.main.temp
			let iconFoco = results.data.weather[0].icon
			this.setState({
				tempFoco: tempFoco,
				iconFoco: iconFoco
			})
			console.log(tempFoco)
		})

		axios.get("http://api.openweathermap.org/data/2.5/weather?q=Colorado%20Springs&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
			let tempCosprings = results.data.main.temp
			let iconCosprings = results.data.weather[0].icon
			this.setState({
				tempCosprings: tempCosprings,
				iconCosprings: iconCosprings
			})
			console.log(tempCosprings)
		})

		axios.get("http://api.openweathermap.org/data/2.5/weather?q=Keystone&appid=63623588dafef4755b03ceb8eaa78ed9&units=imperial").then((results) => {
			let tempKeystone = results.data.main.temp
			let iconKeystone = results.data.weather[0].icon
			this.setState({
				tempKeystone: tempKeystone,
				iconKeystone: iconKeystone
			})
			console.log(tempKeystone)
		})
	}


  render() {

  	let tempDenver = this.state.tempDenver
  	let iconDenver = this.state.iconDenver
  	let tempBoulder = this.state.tempBoulder
  	let iconBoulder = this.state.iconBoulder
  	let tempFoco = this.state.tempFoco
  	let iconFoco = this.state.iconFoco
  	let tempCosprings = this.state.tempCosprings
  	let iconCosprings = this.state.iconCosprings
  	let tempKeystone = this.state.tempKeystone
  	let iconKeystone = this.state.iconKeystone

    return (
    	<div className="weatherContainer">
        <p>Denver: {tempDenver}˚ <img src={"http://openweathermap.org/img/w/" + iconDenver + ".png"}/></p>
        <p>Boulder: {tempBoulder}˚ <img src={"http://openweathermap.org/img/w/" + iconBoulder + ".png"}/></p>
        <p>Foco: {tempFoco}˚ <img src={"http://openweathermap.org/img/w/" + iconFoco + ".png"}/></p>
        <p>Cosprings: {tempCosprings}˚ <img src={"http://openweathermap.org/img/w/" + iconCosprings + ".png"}/></p>
        <p>Keystone: {tempKeystone}˚ <img src={"http://openweathermap.org/img/w/" + iconKeystone + ".png"}/></p>
      </div>
    );
  }
}

export default Weather;