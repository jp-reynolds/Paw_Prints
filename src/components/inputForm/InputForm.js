import React, { Component } from 'react';
import './InputForm.css';
import { Modal, Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';

class InputForm extends Component {

	constructor() {
    	super();
	    this.state = {
        show: false,
        type: "",
        name: "",
        city: "",
        elevation: "",
        description: "",
        image: "",
	    };

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.typeChange = this.typeChange.bind(this);
      this.nameChange = this.nameChange.bind(this);
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

  typeChange(event) {
    this.setState({
      type: event.target.value
    })
  }

  nameChange(event) {
    this.setState({
      name: event.target.value,
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
      type: this.state.type,
      name: this.state.name,
      city: this.state.city,
      elevation: this.state.elevation,
      description: this.state.description,
      image: this.state.image
    } 
    console.log(newPlace);
    axios.post("/api/places", newPlace).then(this.axiosCallback);
  }

  axiosCallback(results) {
    console.log(results);
  }

  render() {

    return (
    	<div>
        <hr/>
        <div>
          <h4 className="addNewText">Share your travels here... </h4>
          <Button className="addNewButton" bsStyle="info" bsSize="medium" onClick={this.handleShow}>
            Add new spot!
          </Button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new spot here...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit={this.onFormModalSubmit}>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Choose Category</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" value={this.state.type} onChange={this.typeChange}>
                    <option value="Choose">Choose...</option>
                    <option value="park">Park</option>
                    <option value="hike">Hike</option>
                    <option value="camp">Camping spot</option>
                  </FormControl>
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Location</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Enter location name here..."
                    onChange={this.nameChange}
                    name='name'
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


