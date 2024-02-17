import React, { useRef } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Navbare from '../Components/Navbare'

const AddCopons = () => {
  const dateref=useRef();
  return (
    <Container>
      <Row className='d-flex w-100 justify-content-center my-3 fs-4' style={{fontFamily:'Protest Riot'}}>Copons</Row>
   
   <Row>
    <Navbare/>
   </Row>

   <Row>
   <Form.Label htmlFor="inputname" style={{fontFamily:'Protest Riot',color:'black'}}>Copon Name :</Form.Label>
      <Form.Control
        type="text"
        id="name"
        className='my-2'
        style={{border:'1px solid black',fontFamily:'Protest Riot'}}

      />


<Form.Label htmlFor="inputedate" style={{fontFamily:'Protest Riot',color:'black'}}>Copon Date :</Form.Label>
      <Form.Control
      ref={dateref}
        type="text"
        id="inputdate"
        className='my-2'
        style={{border:'1px solid black',fontFamily:'Protest Riot'}}
         onFocus={()=>dateref.current.type="date"}
         onBlur={()=>dateref.current.type="text"}
         placeholder='Expire Date'
      />


<Form.Label htmlFor="inputdiscount" style={{fontFamily:'Protest Riot',color:'black'}}>Copon Discount   :</Form.Label>
      <Form.Control
        type="number"
        id="inputdiscount"
        className='my-2'
        style={{border:'1px solid black',fontFamily:'Protest Riot'}}

      />
   </Row>



   <Row  style={{fontFamily:'Protest Riot'}}><Button style={{fontFamily:'Protest Riot'}} className='my-3 btn btn-primary icon-checkmark'> Save Copon</Button></Row>
    </Container>
  )
}

export default AddCopons
