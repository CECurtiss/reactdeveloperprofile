// import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';

function Navigationbar(props) {
  const { currentTab, setTab } = props;
  
    const tabStyle = {
    listStyle: 'none',
    fontFamily: 'Space Mono monospace',
    fontSize: '25px',
  }
  return (
    <>
      <Navbar bg='black' >
        <Container>
          <li style={tabStyle}>
            <a href='#About'
            onClick={() => setTab('About')}
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
            >
            About
            </a>
          </li>
          <li style={tabStyle}>
          <a href='#Portfolio'
            onClick={() => setTab('Portfolio')}
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
            Portfolio
            </a>
          </li>
          <li style={tabStyle}>
            <h1>Clinton</h1>
            <h1>Curtiss</h1>
          </li>
          <li style={tabStyle}>
          <a href='#Resume'
            onClick={() => setTab('Resume')}
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
            Resume
            </a>
          </li>
          <li style={tabStyle}>
          <a href='#Contact'
            onClick={() => setTab('Contact')}
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
            Contact
            </a>
          </li>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
