import React, { Component } from 'react';
import './Place.css';
import axios from 'axios';
import Weather from '../weather/Weather';



class Place extends Component {

	constructor(props, context) {
    	super(props, context);
	    this.state = {
	      show: false,
        editName: "",
        editCity: "",
        editDescription: "",
        editElevation: "",
        editImage: "",
        currentlyEditing : false
	    };
	}

  componentDidMount(event){
      this.setState({
        currentlyEditing : false,
        show: false,
        editName: this.props.name,
        editCity: this.props.city,
        editDescription: this.props.description,
        editElevation: this.props.elevation,
        editImage: this.props.image,
      });
  }


	render() {
		return (
			<div className="placeObject">
				<img className="placeImage" src={this.props.image}/>
          <div className="placeText">
    				<h4 className="placeName">{this.props.name}</h4>
    				<h4 className="place">{this.props.city}</h4>
            <h4 className="placeElevation">{this.props.elevation}</h4>
            <Weather 
              city={this.props.city}
            />
          </div>
				<p className="placeDescription">{this.props.description}</p>
        <hr/>
			</div>

		)
	}

}

export default Place;