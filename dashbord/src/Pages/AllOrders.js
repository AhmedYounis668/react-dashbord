import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navbare from '../Components/Navbare'
import OrderCard from './OrderCard'
import Checkout from './Checkout'

const AllOrders = () => {
  return (
    <Container>
      <Row className='d-flex justify-content-center w-100 fs-4 my-4' style={{fontFamily:'Protest Riot',color:'black'}}>ALL Orders</Row>
    <Row>
        <Navbare/>
    </Row>

    <Row className='d-flex'> 
<OrderCard/>
<OrderCard/>
<OrderCard/>
<OrderCard/>
<OrderCard/>

    </Row>

    <Row>
      <Checkout/>
    </Row>
    </Container>
  )
}

export default AllOrders
