import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { createEvent } from "../actions";
//Form Validation?

//Use Add button to populate a list htmlFor Food and Guests

function CreateEvent() {
  const locationForm = {
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  };

  const guestForm = {
    fname: "",
    lname: "",
    primaryemail: "",
  };

  const [concatLocation, setConcatLocation] = useState(locationForm);
  const [guest, setGuests] = useState(guestForm);

  const initialForm = {
    potluckid: "",
    eventname: ``,
    date: "",
    time: "",
    location: `${concatLocation.address} ${concatLocation.address2} ${concatLocation.city}, ${concatLocation.state} ${concatLocation.zip}`,
    description: ``,
    foods: [],
    guests: [],
  };
  const [formValues, setFormValues] = useState(initialForm);


  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  
  const guestChangeHandler = (e) => {
    setGuests({ ...guest, [e.target.name]: e.target.value });
  };

  const changeLocationHandler = (e) => {
    setConcatLocation({ ...concatLocation, [e.target.name]: e.target.value });
  };

  const addGuest = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, guests: [...formValues.guests, guest] });
    setGuests(guestForm);
  };

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleName">Event Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="with a placeholder"
              value={formValues.eventname}
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="examplePhonenumber">Phone Number?</Label>
            <Input
              type="Phonenumber"
              name="Phonenumber"
              id="examplePhonenumber"
              placeholder="Phonenumber placeholder"
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label htmlFor="exampleAddress">Address</Label>
        <Input
          type="text"
          name="address"
          id="exampleAddress"
          placeholder="1234 Main St"
          value={concatLocation.address}
          onChange={changeLocationHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleAddress2">Address 2</Label>
        <Input
          type="text"
          name="address2"
          id="exampleAddress2"
          placeholder="Apartment, studio, or floor"
          value={concatLocation.address2}
          onChange={changeLocationHandler}
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleCity">City</Label>
            <Input
              type="text"
              name="city"
              id="exampleCity"
              value={concatLocation.city}
              onChange={changeLocationHandler}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label htmlFor="exampleState">State</Label>
            <Input
              type="text"
              name="state"
              id="exampleState"
              value={concatLocation.state}
              onChange={changeLocationHandler}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label htmlFor="exampleZip">Zip</Label>
            <Input
              type="text"
              name="zip"
              id="exampleZip"
              value={concatLocation.zip}
              onChange={changeLocationHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="with a placeholder"
              value={formValues.date}
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleTime">Time</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
              value={formValues.time}
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleDescription">Description</Label>
            <Input
              onChange={changeHandler}
              type="text"
              name="description"
              id="exampleDescription"
              value={formValues.description}
            />
          </FormGroup>
        </Col>
      </Row>
      {/* Show List of Guests added Here, can we click to remove guests? */}
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="fname">First Name</Label>
            <Input
              type="name"
              name="fname"
              id="fname"
              placeholder="with a placeholder"
              value={guest.fname}
              onChange={guestChangeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="lname">First Name</Label>
            <Input
              type="name"
              name="lname"
              id="lname"
              placeholder="with a placeholder"
              value={guest.lname}
              onChange={guestChangeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="Guestemail">Email</Label>
            <Input
              type="email"
              name="primaryemail"
              id="email"
              placeholder="email placeholder"
              value={guest.primaryemail}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button onSubmit={addGuest} className="bg-addon">
        Add Guest
      </Button>
      {/* Show List of Food Items added Here, can we click to remove food? */}
      <FormGroup>
        <Label htmlFor="exampleFoodName">Food Name</Label>
        <Input
          type="name"
          name="name"
          id="exampleFoodName"
          placeholder="name"
        />
      </FormGroup>{" "}
      <Button className="bg-addon">Add Menu Item</Button>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck" />
        <Label htmlFor="exampleCheck" check>
          Confirm
        </Label>
      </FormGroup>
      <Button className="bg-confirm">Create Event</Button>
      <Button className="bg-cancel">Cancel</Button>
    </Form>
  );
}

export default connect(null, { createEvent })(CreateEvent);
