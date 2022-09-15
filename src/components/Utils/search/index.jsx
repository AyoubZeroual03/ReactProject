
import React from 'react'
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const Search = ({hanldeChange}) => {
  return (
   <div>
   <h1 className="text-center m-5 ">Que cherchez vous ?</h1>
   <Container className="mb-5">

      <FloatingLabel
        controlId="floatingInput"
        label="Tapez le nom de votre film"
        className="mb-3"
        onChange={(e)=>hanldeChange(e.target.value)}
        >
        <Form.Control type="Text"  placeholder="name@example.com" />
      </FloatingLabel>
      
        </Container>
   </div>
  )
}
