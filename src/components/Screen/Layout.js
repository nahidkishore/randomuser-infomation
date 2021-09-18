import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderScreen from './HeaderScreen';
import '../Style/Layout.css';
const Layout = (props) => {
  return (
    <>
      <HeaderScreen />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className='sidebar'>
              <ul>
                <li>
                  <NavLink exact to={`/counter`}>
                    Counter
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/form`}>Form</NavLink>
                </li>
                <li>
                  <NavLink to={`/list`}>List</NavLink>
                </li>
              </ul>
            </Col>
            <Col
              md={10}
              style={{
                marginLeft: 'auto',
                paddingTop: '40px',
                paddingBottom: '60px',
              }}
            >
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
       
    </>
  );
};

export default Layout;
