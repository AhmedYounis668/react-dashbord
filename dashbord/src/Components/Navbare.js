import React from 'react'
import Sidebare from './Sidebare'
import { Container } from 'react-bootstrap'

const Navbare = () => {
  return (
    <Container className='d-flex justify-content-center'>
    <div className='d-flex m-2 w-75 justify-content-center' >
    <Sidebare/>
    <input  type='text' className='w-100 search' placeholder='Search' />   
    </div>
    </Container>
  )
}

export default Navbare
