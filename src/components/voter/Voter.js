import React, { Component } from 'react';
import './Voter.css';
import axios from 'axios';



class Voter extends Component {

	constructor(props, context) {
    	super(props, context);
	    this.state = {

	    };
	}

  componentDidMount(event){
      this.setState({

      });
  }


	render() {
		return (
			<div className="votes">
        <ul>
          <li className="glyphicon glyphicon-arrow-up">
            <p>{this.props.likes}</p>
          </li>
          <li className="glyphicon glyphicon-arrow-down">
            <p>{this.props.dislikes}</p>
          </li> 
        </ul>
			</div>

		)
	}

}

export default Voter;