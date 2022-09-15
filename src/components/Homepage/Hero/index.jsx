import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from "../../../img/manmodelimage.png"
import {heroInfo} from '../../../data'


export const Hero = () => {
  return (
    <div className='bg-dark text-white'>
      <Container  >
        <Row>
          <Col className="col-md-6  "> <h1>{heroInfo.at(0).title}</h1>
            <p> {heroInfo.at(0).description}</p>
          </Col>
          <Col className="col-md-6"> <img src={img} alt="" />
           </Col>



        </Row>



      </Container>
    </div>
  )
}

