import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Navbare from '../Components/Navbare'
import Form from 'react-bootstrap/Form';

const EditCustomerData = () => {
  return (
    <Container>
      <Row>
        <Navbare/>
      </Row>

<Row>
<Form.Label htmlFor="inputname" style={{fontFamily:'Protest Riot',color:'black'}}>Username</Form.Label>
      <Form.Control
        type="text"
        id="name"
        className='my-2'
        style={{border:'1px solid black'}}

      />
      


      <Form.Label htmlFor="inputphone" style={{fontFamily:'Protest Riot',color:'black'}}>Phone</Form.Label>
      <Form.Control
        type="number"
        id="phone"
        className='my-2'
        maxLength="11"
        style={{border:'1px solid black'}}
      />


<Form.Label htmlFor="inputemail" style={{fontFamily:'Protest Riot',color:'black'}}>E-mail</Form.Label>
      <Form.Control
        type="email"
        id="email"
        className='my-2'
        style={{border:'1px solid black'}}

      />
</Row>

<Row className='my-3'>
    <Button style={{fontFamily:'Protest Riot'}} className='btn btn-danger icon-pencil2'>Save Changes</Button>
</Row>
    </Container>
  )
}

export default EditCustomerData
