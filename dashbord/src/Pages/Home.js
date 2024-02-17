import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Homebody from '../Components/Homebody'
import Navbare from '../Components/Navbare'

const Home = () => {
  return (
    <div>
    <Row>
    <Navbare/>

    </Row>
    <Container className='my-4'>
    <Row className='d-flex '>
   
    <Col className='col-12'>
<Homebody/>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Home
