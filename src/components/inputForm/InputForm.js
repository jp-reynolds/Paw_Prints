import React, { Component } from 'react';
import './InputForm.css';
import { Modal, Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';

class InputForm extends Component {

	constructor() {
    	super();
	    this.state = {
        show: false,
        catergory: "",
        location: "",
        city: "",
        elevation: "",
        description: "",
        image: "",
	    };

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.categoryChange = this.categoryChange.bind(this);
      this.locationChange = this.locationChange.bind(this);
      this.cityChange = this.cityChange.bind(this);
      this.elevationChange = this.elevationChange.bind(this);
      this.descriptionChange = this.descriptionChange.bind(this);
      this.imageChange = this.imageChange.bind(this);
      this.onFormModalSubmit = this.onFormModalSubmit.bind(this);

	}

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  // componentDidMount(event){
  //     this.setState({

  //     });
  // }

  categoryChange(event) {
    this.setState({
      category: event.target.value
    })
  }

  locationChange(event) {
    this.setState({
      location: event.target.value,
    })
  }

  cityChange(event) {
    this.setState({
      city: event.target.value,
    })
  }

  elevationChange(event) {
    this.setState({
      elevation: event.target.value,
    })
  }

  descriptionChange(event) {
    this.setState({
      description: event.target.value,
    })
  }

  imageChange(event) {
    this.setState({
      image: event.target.value,
    })
  }

  onFormModalSubmit(event) {
    event.preventDefault();
    let newPlace = {
      newCategory: this.state.category,
      newName: this.state.location,
      newCity: this.state.city,
      newElevation: this.state.elevation,
      newDescription: this.state.description,
      newImage: this.state.image
    } 
    console.log(newPlace)
  }

  render() {

    return (
    	<div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add new spot!
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new spot here...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit={this.onFormModalSubmit}>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Choose Category</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" value={this.state.category} onChange={this.categoryChange}>
                    <option value="park">Park</option>
                    <option value="hike">Hike</option>
                    <option value="camp">Camping spot</option>
                  </FormControl>
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Location</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.location}
                    placeholder="Enter location name here..."
                    onChange={this.locationChange}
                    name='location'
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>City</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.city}
                    placeholder="Enter city here..."
                    onChange={this.cityChange}
                    name='city'
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Elevation</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.elevation}
                    placeholder="Enter elevation here..."
                    onChange={this.elevationChange}
                    name='elevation'
                  />
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Description</ControlLabel>
                  <FormControl 
                    componentClass="textarea" 
                    placeholder="Enter description here..."
                    value={this.state.description}
                    onChange={this.descriptionChange}
                    name='description'
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Image</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.image}
                    placeholder="Enter image URL here..."
                    onChange={this.imageChange}
                    name='image'
                  />
                </FormGroup>

                <Button type="submit">Submit</Button>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}

export default InputForm;


