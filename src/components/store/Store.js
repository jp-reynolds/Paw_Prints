import React, { Component } from 'react';
import './Store.css'

class Store extends Component {

	constructor() {
		super();
		this.state = {
			places: {
				data: []
			},
		};
	}

	componentDidMount() {

	}

  render() {

    return (
      <div className="storeContainer">
      	   	<h1 id="title">Outdoor Gear COMING SOON!!!</h1>
      </div>
    );
  }
}

export default Store;