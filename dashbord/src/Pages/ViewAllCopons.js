import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import Navbare from '../Components/Navbare'
import CoponCardContainer from './CoponCardContainer'

const ViewAllCopons = () => {
  return (
    <Container>
      <Row style={{fontFamily:'Protest Riot',color:'black'}} className='d-flex fs-3 w-100 justify-content-center my-3'>All Copons</Row>
    

    <Row>
        <Navbare/>
    </Row>


    <Row  className=' w-100'>
  <CoponCardContainer/>
    </Row>
    </Container>
  )
}

export default ViewAllCopons
