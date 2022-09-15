import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
export const NotFoundPage = () => {
  const navigate =useNavigate()
  return (
    <div className='flex text-center align-items-center'>
                <Container className='btn btn-warning cee '>
              <h1 className='text-center' onClick={()=>navigate("/Home")}>Go to Home </h1>


                </Container>
          </div>
    
  )
}

export default NotFoundPage;