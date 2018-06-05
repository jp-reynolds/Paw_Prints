import React, { Component } from 'react';
import './InputForm.css';
import { Modal, Button, Checkbox, Radio, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';

class InputForm extends Component {

	constructor(props, context) {
    	super(props, context);

	    this.state = {
        show: false
	    };

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

	}

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  componentDidMount(event){
      this.setState({

      });
  }


  onFormModalSubmit(event) {
    event.preventDefault() 

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
              <form>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Choose Category</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="park">Park</option>
                    <option value="hike">Hike</option>
                    <option value="camp">Camping spot</option>
                  </FormControl>
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Location</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter location name here..."
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>City</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter city here..."
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Elevation</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter elevation here..."
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Description</ControlLabel>
                  <FormControl 
                    componentClass="textarea" 
                    placeholder="Enter description here..." 
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Image</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter image URL here..."
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <Button type="submit" pullRight>Submit</Button>
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


