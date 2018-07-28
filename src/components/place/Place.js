import React, { Component } from 'react';
import './Place.css';
import axios from 'axios';
import Weather from '../weather/Weather';
import Voter from '../voter/Voter';
import { Button } from 'react-bootstrap';



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
        <Voter
          likes={this.props.likes}
          dislikes={this.props.dislikes}
        />
				<img className="placeImage" src={this.props.image}/>
        <div className="placeText">
    			<h4 className="placeName">{this.props.name}</h4>
    			<h4 className="place">{this.props.city}</h4>
          <Weather 
            city={this.props.city}
          />
        </div>
        <div className="placeDescription">
          <p className="descriptionText">{this.props.description} <Button className="descriptionButton"></Button></p>
          
        </div>
        <hr/>
			</div>

		)
	}

}

export default Place;