import React from 'react';
import PropTypes from 'prop-types';
import './dashboard.scss';
import { Navbar, Nav, Button, Form, FormControl, Card } from 'react-bootstrap';
import dashboardData from './dashboardData.json'

const dashboard = () => (
  <div className="dashboard" data-testid="dashboard">
    
    {/* Navigaion bar */}
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>

    {/* Dashboard Cards */}
    <div className="cards">
    {dashboardData.map((value, index) => {return (
      <Card style={{width: '25rem', height: '18rem', padding: '5px', margin: '10px', paddingBottom: '20px'}}>
        <Card.Img variant="top" key={index} src={value.imagePath} />
      <Card.Body>
        <Card.Title key={index}>{value.name}</Card.Title>
        <Card.Text key={index}>{value.details}</Card.Text>
      </Card.Body>
      <Button style={{width: '10rem', margin: '0 auto'}} variant="secondary">Check</Button>
      </Card>
    )})}
    </div>

  </div>
);

dashboard.propTypes = {};

dashboard.defaultProps = {};

export default dashboard;
