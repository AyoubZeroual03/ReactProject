import React from 'react'
import {Layout} from "../../components/Layout"
import register from "../../img/register.svg"
import { FaEnvelope, FaMapMarkerAlt,FaLock,FaTransgender} from "react-icons/fa";

import {
    Button,
    Form,
    Container,
    Row,
    Col
  } from "react-bootstrap"
import "./style.css"
import { useNavigate } from 'react-router'

export const Register = () => {

const navigate=useNavigate();

  return (
<Layout>
    <Container  fluid>
    <Row>
    <Col className="col-md-6 col-lg-6 p-5 " > <img  width= '520px' src={register} /></Col>
    <Col className="col-md-6 "> 
            <div  className='log align-self-center p-5 m-auto mt-5  '>
                <h1 className='text-center mb-5 '>
                    Sign up
                </h1>
    <Form>
      
        <Form.Group as={Col} controlId="formGridEmail">

            
          
          <div className='d-flex mb-4'>

          <div className='icon p-1 pe-3'><FaEnvelope/></div>
          
          <Form.Control type="email" placeholder="Enter email" />
          </div>
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
            <div className='d-flex mb-4'>
            <div className='icon p-1 pe-3'><FaLock/></div>
                 <Form.Control type="password" placeholder="Password" />
            </div>
          
         
        </Form.Group>
      

      <Form.Group  controlId="formGridAddress1">
        <div className='d-flex mb-4'>
        <div className='icon p-1 pe-3'><FaMapMarkerAlt/></div>
            <Form.Control placeholder="your adress" />
        </div>
        
      </Form.Group>


      


        <Form.Group as={Col} controlId="formGridState">
            <div className='d-flex mb-4'>
            <div className='icon p-1 pe-3'><FaTransgender/></div>


                         <Form.Select defaultValue="Choose...">
            <option></option>
            <option>Male</option>
            <option>femelle</option>
            <option>autre</option>
          </Form.Select>
            </div>
 
        </Form.Group>
        <br/>
     

      

      <Button variant="primary" type="submit" onClick={()=>navigate("/Home")}>
        Register
      </Button>
    </Form>
    </div>

    </Col>
    </Row>
    </Container>



</Layout>
  )
}
