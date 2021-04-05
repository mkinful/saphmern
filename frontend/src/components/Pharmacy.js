import React from 'react';
import { Form } from 'react-bootstrap';
import './Pharmacy.css';

export const Pharmacy = () => {
    return (
        <div className="pharm">
              <h1 className="order">Refill your orders today.</h1>
              <h5 className="fill">Fill out the form below.</h5>

              <Form className="form-section">
                <Form.Group className="form-group-fluid" controlId="pharmForm.ControlInput1">
                  <Form.Label className="h5">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="form-group" controlId="pharmForm.ControlInput2">
                <Form.Label className="h5">Password</Form.Label>
                  <Form.Control type="email" placeholder="Password" />
                </Form.Group>
                <Form.Group className="form-group" controlId="pharmForm.ControlInput2">
                <Form.Label className="h5">Rx Number</Form.Label>
                  <Form.Control type="email" placeholder="#" />
                </Form.Group>
                <Form.Group className="form-group" controlId="pharmForm.ControlSelect1">
                <Form.Label className="h5">Number of Prescriptions</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="h5">Questions for the pharmacist?</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>

            <button className="submit-btn" type="submit">Submit</button>

        </div>
    )
}
