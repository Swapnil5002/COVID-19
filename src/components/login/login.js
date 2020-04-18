import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';
import { Card, Form, Button } from 'react-bootstrap';


const login = () => (
  <div className="login" data-testid="login" style={{backgroundColor: 'whitesmoke', height: '100vh', paddingTop: '150px'}}>
    <Card style={{width: '30rem', margin: '0 auto'}}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Enter your credentials</Card.Subtitle>
        <Card.Text>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card.Text>
      </Card.Body>
    </Card>  
  </div>
);

login.propTypes = {};

login.defaultProps = {};

export default login;
