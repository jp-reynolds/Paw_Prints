import React, { Component } from 'react';
import './Place.css';
import axios from 'axios';



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
			<div>
				<img className="placeImage" src={this.props.image}/>
				<h4 className="placeName">{this.props.name}</h4>
				<h4 className="placeCity">{this.props.city}</h4>
				<p className="placeDescription">{this.props.description}</p>
				<h4 className="placeElevation">{this.props.elevation}</h4>
			</div>

		)
	}

}

export default Place;