import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { Hero } from '../../components/Homepage/Hero'
import { useParams } from 'react-router'
import useFetch from '../../hooks'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Cards } from '../../components/Utils/Cards'
import Spn from '../../components/Utils/spinner'


export const Category = () => {
  const params =useParams()

     const [data,error,loading] = useFetch(`https://fakestoreapi.com/products/category/${params.cg}`)     
     const [cartsearch, setcartsearch] = useState([]);
     const [chercart, setchercart] = useState("");
     const CategoryName= params.cg
     useEffect(() => {
      setchercart("")
     }, [CategoryName]);

        useEffect(() => {
       setcartsearch(data)
       chercart !== "" && setcartsearch(data.filter(item => item.title.includes(chercart)))
     }, [chercart, data]);
   
     const hanldeChange = (text) => {
       setchercart(text)
     }
  return (
    <div>
      <Layout>
        <Hero />
              <Container className='mb-5'>
               <h1 className='text-center p-5'>{params.cg}</h1>

               <div className="mb-5 ">
          <Container className="mb-5 ">
            <FloatingLabel
              controlId="floatingInput"
              label="Search for Product "
              className="mb-3 "
              onChange={(e) => hanldeChange(e.target.value)}>
              <Form.Control type="Text" placeholder="name@example.com" />
            </FloatingLabel>
          </Container>
        </div>

              <Row>
              {error && "error"}
              {loading && <Spn />}     
              { cartsearch && cartsearch.map((item) => {
                  return(    
                  <Col className='mb-3' md={4} lg={3} sm={6} xs={12} key={item.id}>
                  <Cards item={item} />
                  </Col>                          
                  )
              })}
              </Row>
              </Container>
    
    
  
      </Layout >
    </div>
  )
}
