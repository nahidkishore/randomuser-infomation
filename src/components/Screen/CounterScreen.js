import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from './Layout';
const CounterScreen = () => {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Layout sidebar>
      {/* <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <h5>Count is {count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
      </div> */}

      <Container>
        <Row>
          <Col>
            <div className='d-flex justify-content-around m-2'>
              <Button className='btn-lg' variant='success' onClick={handleDecrement}>
                Decrement
              </Button>
              <h1>Count is: {count}</h1>
              <Button className='btn-lg' variant='success' onClick={handleIncrement}>
                Increment
              </Button>
              <Button className='btn-lg' variant='danger' onClick={() => setCount(0)}>
                Reset
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CounterScreen;
