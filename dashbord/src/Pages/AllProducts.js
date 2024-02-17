import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProCard from './ProCard'
import Navbare from '../Components/Navbare'

const AllProducts = () => {
  return (
    <Container>

      <Row className='d-flex justify-content-center my-3 fs-4' style={{fontFamily:'Protest Riot',color:'black'}}>All Products</Row>
    <Row>
        <Navbare/>
    </Row>
    <Row>
        <Col className='col-12 justify-content-start w-100' >
            <ProCard/>
        </Col>
    </Row>

    </Container>
  )
}

export default AllProducts
