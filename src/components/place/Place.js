import React, { Component } from 'react';
import './Place.css';
import Weather from '../weather/Weather';
import Voter from '../voter/Voter';


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
  			<div className="placeObject">
  				  <img className="placeImage" src={this.props.image}/>
            <div className="placeTitle">
        			 <h4 className="placeName">{this.props.name}</h4>
        			 <h4 className="placeCity">{this.props.city}</h4>
               <Weather 
              city={this.props.city}
             />
            </div>
            
            <Voter
              likes={this.props.likes}
              dislikes={this.props.dislikes}
            />
            <div className="placeDescription">
              <p className="descriptionText">{this.props.description}</p>
            </div>
  			</div>
        <hr/>
      </div>
		)
	}
}

export default Place;