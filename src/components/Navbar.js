import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';

function Navigationbar() {
  const tabStyle = {
    listStyle: 'none',
  }
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <li style={tabStyle}>
            About
          </li>
          <li style={tabStyle}>
            Portfolio
          </li>
          <li style={tabStyle}>
            <h2>Clinton</h2>
            <h2>Curtiss</h2>
          </li>
          <li style={tabStyle}>
            Resume
          </li>
          <li style={tabStyle}>
            Contact
          </li>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
