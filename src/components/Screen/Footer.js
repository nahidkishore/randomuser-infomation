import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
const Footer = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='sm'
    fixed="bottom"
      bg='dark'
      variant='dark'
      style={{ zIndex: '1' }}
    >
      <Container fluid>
        <div className='navbar-brand'>
          <small className='text-left'>
            <p>
              <strong>Subject: </strong> Computer Science & Engineering
            </p>
            <p>
              {' '}
              <strong>University: </strong> East West University
            </p>
            <p>
              <strong>Year: </strong> 2016-2020
            </p>
          </small>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;
