import React from 'react'
import { useParams } from "react-router-dom";

import { Layout } from '../../components/Layout'
import { Container,Row,Col } from 'react-bootstrap'
import useFetch from '../../hooks';


import "./style.css"
import Spn from '../../components/Utils/spinner/index';

export const Detail = () => {
  const params =useParams();
   const [data,error,loading]= useFetch(`http://fakestoreapi.com/products/${parseInt(params.id)}`)
  return (
    <>
          {error && "error"}
          {loading ? <Spn />
           :
            
    
        <Layout>
              <Container className='p-5'  >
            

                <h1> product number {data && data.id}</h1>
                
                <Row >
                <Col className="col-md-6 "> 
                <img src={data && data.image}  width="400px" />
                 
                </Col> 
                <Col className="col-md-6  p-5 " >
                  <h1 className=' pb-3'> {data && data.title}</h1>
                   <p className="text-black  pb-3">{data && data.description}</p>


                   <h3 className='text-muted pb-3'> category : {data && data.category}</h3> 
                   <h4 >Price : <span  className='text-info'>{data && data.price} $</span> </h4>

                </Col>
                </Row>
              </Container>
        </Layout>
                }
        </>
  )
}

