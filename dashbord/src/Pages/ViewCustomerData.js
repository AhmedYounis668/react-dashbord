import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Navbare from '../Components/Navbare'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
const ViewCustomerData = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (


    
    <Container>

{/* delete modal */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'Protest Riot'}}>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this customer?</Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>

          <Button style={{fontFamily:'Protest Riot'}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{fontFamily:'Protest Riot'}} variant="primary" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>





      <Row>
        <Navbare/>
      </Row>
      <Row  className='w-100 my-3'>
        <div className='d-flex justify-content-between'>
            <div style={{fontFamily:'Protest Riot'}}>Custmer Name :Mark</div>
            <div style={{fontFamily:'Protest Riot'}}>ID : 12548d45sadsa44</div>
        </div>
      </Row>

      <Row>
      <Table striped bordered hover size="sm">
      <thead style={{textAlign:'center'}}>
        <tr>
          <th  className='tableth'>id</th>
          <th  className='tableth'>Name</th>
          <th  className='tableth'>phone</th>
          <th  className='tableth'>Username</th>
        </tr>
      </thead>
      <tbody style={{textAlign:'center'}}>
        <tr>
          <td  className='tableth'>12548d45sadsa44</td>
          <td  className='tableth'>Mark</td>
          <td  className='tableth'>Otto</td>
          <td  className='tableth'>@mdo</td>
        </tr>
        
      </tbody>
    </Table>

      </Row>

      <Row className='w-100 my-3'>
        <div className='d-flex justify-content-center'>
            <Button onClick={handleShow}  style={{fontFamily:'Protest Riot'}} className='btn btn-danger mx-2 icon-bin'>Delete</Button>
            <Link to={`/editcustomer`}>
            <Button  style={{fontFamily:'Protest Riot'}} className='btn btn-primary icon-pencil'>Update</Button>
            </Link>
        </div>
      </Row>
    </Container>
  )
}

export default ViewCustomerData
