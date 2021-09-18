import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
const HeaderScreen = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      style={{ zIndex: '1' }}
    >
      <Container fluid>
        <Link to='/' className='navbar-brand'>
          Nahidul Islam
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link text-right'>
                
                <p> Rampura,Dhaka </p>
                <p>01776180002</p>
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderScreen;
