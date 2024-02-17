import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Navbare from '../Components/Navbare'

const AddCustomer = () => {
  return (
    <Container>
      <Row style={{fontFamily:'Protest Riot',color:'black'}} className='d-flex fs-3 w-100 justify-content-center my-3'>Add New Customer</Row>
    

<Row>
    <Navbare/>
</Row>

<Row>
    <div className='d-flex w-100'>
      <Form.Control
        type="text"
        className='m-2 w-50'
        style={{border:'1px solid black',fontFamily:'Protest Riot'}}
placeholder='Customer Name'
      />

      <Form.Control
        type="number"
        maxLength="11"
        className='m-2 '
        style={{border:'1px solid black',fontFamily:'Protest Riot',width:'40%'}}
placeholder='Phone'
      />
      </div>
</Row>


<Row>
    <div className='d-flex w-100'>
      <Form.Control
        type="text"
        className='m-2 w-50'
        style={{border:'1px solid black',fontFamily:'Protest Riot'}}
placeholder='User Name'
      />

      <Form.Control
        type="Email"
        className='m-2 '
        style={{border:'1px solid black',fontFamily:'Protest Riot',width:'40%'}}
placeholder='Email'
      />
      </div>
</Row>



<Row>
    <div className='d-flex w-100'>
<select className='w-100 my-2' style={{padding:'10px',fontFamily:'Protest Riot'}}>
    <option>اختر الدوله</option>
    <option>الامارات</option>
    <option>مصر</option>
    <option>المغرب</option>
    <option>تونس</option>
    <option>الجزائر</option>

</select>

      
      </div>
</Row>




<Row>
    <div className='d-flex w-100'>
      <Form.Control
        type="text"
        className='m-2 w-100'
        style={{border:'1px solid black',fontFamily:'Protest Riot'}}
placeholder='Address'
      />

      
      </div>
</Row>

<Row  style={{fontFamily:'Protest Riot'}}><Button style={{fontFamily:'Protest Riot'}} className='my-3 btn btn-primary icon-checkmark'> Save Changes</Button></Row>

    </Container>
  )
}

export default AddCustomer
