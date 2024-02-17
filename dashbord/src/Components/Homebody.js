import React from 'react'
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
const Homebody = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>



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





      <Table style={{fontFamily:'Protest Riot'}}  striped bordered hover className='tablestyle'>
      <thead style={{textAlign:'center',fontFamily:'Protest Riot'}}>
        <tr style={{fontFamily:'Protest Riot'}}>
          <th style={{color:'royalblue'}} className='tableth'>Acions</th>
          <th className='tableth'>Customer Name</th>
          <th className='tableth'>Phone</th>
          <th className='tableth'>Username</th>
        </tr>
      </thead>
      <tbody style={{textAlign:'center'}}>
        <tr>
          <td style={{width:'220px',fontFamily:'Protest Riot'}}>
        <Link to={`/viewcustomerdata`} style={{textDecoration:'none'}}>
          <button style={{fontFamily:'Protest Riot'}} className='btn btn-primary mx-2 icon-circle-right'>view</button>  
          </Link>
          <Link to={`/editcustomer`} style={{textDecoration:"none"}}>
          <button className='btn btn-success mx-2 icon-pencil2'>Edit</button> 
          </Link>
          <button onClick={handleShow} className='btn btn-dark mx-2 icon-bin'>Delete</button> 
          </td>
          <td className='tableth'>Mark</td>
          <td className='tableth'>01090225813</td>
          <td className='tableth'>Mark@gmail.com</td>
        </tr>

        <tr>
          <td style={{width:'220px',fontFamily:'Protest Riot'}}>
          <Link to={`/viewcustomerdata`} style={{textDecoration:'none'}}>
          <button style={{fontFamily:'Protest Riot'}} className='btn btn-primary mx-2 icon-circle-right'>view</button>  
          </Link>
          <Link to={`/editcustomer`} style={{textDecoration:"none"}}>
          <button className='btn btn-success mx-2 icon-pencil2'>Edit</button> 
          </Link>          <button onClick={handleShow} className='btn btn-dark mx-2 icon-bin'>Delete</button> 
          </td>
          <td className='tableth'>Ahmed</td>
          <td className='tableth'>01112134836</td>
          <td className='tableth'>saeidahmed@gmail.com</td>
        </tr>



        <tr>
          <td style={{width:'220px',textAlign:'center',fontFamily:'Protest Riot'}}>

          <Link to={`/viewcustomerdata`} style={{textDecoration:'none'}}>
          <button style={{fontFamily:'Protest Riot'}} className='btn btn-primary mx-2 icon-circle-right'>view</button>  
          </Link>
          <Link to={`/editcustomer`} style={{textDecoration:"none"}}>
          <button className='btn btn-success mx-2 icon-pencil2'>Edit</button> 
          </Link>          <button onClick={handleShow} className='btn btn-dark mx-2 icon-bin'>Delete</button> 
          </td>
          <td className='tableth'>farouk</td>
          <td className='tableth'>01118324550</td>
          <td className='tableth'>farouk@gmail.com</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default Homebody
