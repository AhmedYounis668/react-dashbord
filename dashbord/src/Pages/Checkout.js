import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'

const Checkout = () => {
  return (
    <Container>
      <Row className='my-2' style={{direction:'rtl'}}>
      <div className='d-flex justify-content-center mx-2'>
      <Form.Control
        type="text"
        className='m-2 w-50'
        style={{border:'1px solid black',fontFamily:'Protest Riot'}}
placeholder='Enter Copon'
      />

      
      <Button  style={{fontFamily:'Protest Riot',textAlign:'center'}}>Enter </Button>
      </div>
      <div className='d-flex justify-content-center fs-4'>
      <p style={{fontFamily:'Protest Riot'}}>Total :15000 LE</p>

       </div>
       <div className='d-flex justify-content-center'>

      <Button className='w-50 btn btn-danger' style={{fontFamily:'Protest Riot',textAlign:'center',fontWeight:'bold'}}>اتمام عمليه الشراء </Button>
      </div>

      </Row>
    </Container>
  )
}

export default Checkout
