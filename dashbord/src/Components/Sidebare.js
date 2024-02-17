import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
const Sidebare = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(

    <div>
       

       <Button variant="primary icon-menu" onClick={handleShow} className="me-2 my-3 ">
        
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{fontFamily:'Protest Riot',color:'royalblue'}}>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Link to={`/`} style={{textDecoration:'none'}}>
        <div  className='sideitem'><p className='icon-home fs-4 m-2 ' ><span className='mx-2' style={{fontFamily:'Protest Riot'}}>Home</span></p></div> 
        </Link>

        <Link to={`/AddCustomer`} style={{textDecoration:'none',color:'black'}}>
        <div className='sideitem'><p className='icon-users fs-4 m-2 ' ><span className='mx-2' style={{fontFamily:'Protest Riot'}}>Customer</span></p></div> 
        </Link>
         <Link to={`/allproducts`} style={{textDecoration:'none',color:'black'}}>
        <div className='sideitem'><p className='icon-menu fs-4 m-2 ' ><span className='mx-2' style={{fontFamily:'Protest Riot'}}>All Products</span></p></div> 
        </Link>

        <Link to={`/Allorders`} style={{textDecoration:'none',color:'black'}}>
        <div className='sideitem'><p className='icon-cart fs-4 m-2 ' ><span className='mx-2' style={{fontFamily:'Protest Riot'}}>All Orders</span></p></div> 
        </Link>

        <Link to={`/addcopons`} style={{textDecoration:'none',color:'black'}}>
        <div className='sideitem'><p className='icon-power fs-4 m-2 ' ><span className='mx-2' style={{fontFamily:'Protest Riot'}}>Copons</span></p></div> 
        </Link>

        <Link to={`/ViewAllCopons`} style={{textDecoration:'none',color:'black'}}>
        <div className='sideitem'><p className='icon-power fs-4 m-2 ' ><span className='mx-2' style={{fontFamily:'Protest Riot'}}>View Copons</span></p></div> 
        </Link>
        </Offcanvas.Body>
      </Offcanvas>
        </div>

  )
}

export default Sidebare
