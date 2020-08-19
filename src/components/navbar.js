import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {
  Navbar, Nav
} from 'react-bootstrap';


const Styles = styled.div`
  .navbar{
  	background-color: #202040;
  }
  }
  .hi{
  	text-decoration: none;
  	color: #bbb;
    &:hover{
        color: white;
    }
  }
`
const NavBar = () => {
 
  return (
  	<Styles>
  	<Navbar expand="sm" >
      <Navbar.Brand href="#home">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" alt="NASA"
         width="40" height="40" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link><Link to="/" className="hi">Picture of the Day</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><Link to="/mars" className="hi">Mars Rover</Link></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
    </Styles>
  );
}
export default NavBar

