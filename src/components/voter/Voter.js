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
          <p id="upArrow" className="glyphicon glyphicon-arrow-up">
            {this.props.likes}
          </p>
          <p id="downArrow" className="glyphicon glyphicon-arrow-down">
            {this.props.dislikes}
          </p> 
        </ul>
			</div>

		)
	}

}

export default Voter;