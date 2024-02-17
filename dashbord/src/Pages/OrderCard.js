import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import img from '../images/a2.jpg'

const OrderCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
  <Container className="card1 my-2 w-100" style={{color:'white',direction:"rtl"}}>
  {/* delete modal */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'Protest Riot'}}>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this Order?</Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>

          <Button style={{fontFamily:'Protest Riot'}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{fontFamily:'Protest Riot'}} variant="primary" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
  <Row className='w-100 my-2 card2 d-flex justify-content-between'>
  <Col className=' col-4 col-md-2' >
<img src={img} alt='a' className="ordercardimg"/>

  </Col>

  <Col className='col-8 col-md-10  ' style={{color:'white'}}>
  <div className='d-flex justify-content-between' >
<div style={{fontFamily:'Protest Riot'}}>Order Id :15454d5sad454444558</div>
<Button onClick={handleShow} className='btn btn-danger icon-bin' style={{fontFamily:'Protest Riot'}}>Delete</Button>
  </div>
  <div className='d-flex justify-content-between'>
  <div style={{fontFamily:'Protest Riot'}}>Product Categoury :Jackets</div>
  <div style={{fontFamily:'Protest Riot'}}>Product Name : Jacket type1</div>

  </div>
  <div className='d-flex justify-content-between'>

  <div style={{fontFamily:'Protest Riot'}}>Customer Name : Ahmed Younis</div>
  <div style={{fontFamily:'Protest Riot'}}>Address : Egypt , tanta</div>
  </div>

<div className='my-2 d-flex justify-content-between'>
    <div className='d-flex '><span className='m-2'>Color :</span><div className='color'></div></div>
<div>order Date :24/2/2024</div>
<div style={{fontFamily:'Protest Riot'}}>Price : 780 LE</div>

</div>
<div>

<div className='d-flex justify-content-center'>
<div style={{cursor:'pointer',fontFamily:'Protest Riot'}} className='mx-2'>تم الاستلام</div>
<div style={{cursor:'pointer',fontFamily:'Protest Riot'}}>انهاء الاوردر</div>

</div>

</div>

</Col>
 </Row>
  </Container>
  )
}

export default OrderCard
