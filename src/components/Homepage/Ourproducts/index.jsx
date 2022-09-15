import React from 'react'
import { Cards } from '../../Utils/Cards'
import { Row, Col, Container, FloatingLabel, Form } from 'react-bootstrap'

import useFetch from "./../../../hooks/index"
import Spn from '../../Utils/spinner/index_H'
import { useEffect } from 'react'
import { useState } from 'react'


export const Ourproducts = () => {
  const [cartsearch, setcartsearch] = useState([]);
  const [chercart, setchercart] = useState("");

  const [data, error, loading] = useFetch(`https://fakestoreapi.com/products`)
  useEffect(() => {
    setcartsearch(data)
    chercart !== "" && setcartsearch(data.filter(item => item.title.includes(chercart)))
  }, [chercart, data]);

  const hanldeChange = (text) => {
    setchercart(text)
  }


  return (
    <div>

      <Container className='mb-5'>
        <h1 className='text-center p-5'>Our products</h1>


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
          {cartsearch && cartsearch.map((item) => {
            return (
              <Col className='mb-3' md={4} lg={3} sm={6} xs={12} key={item.id}>
                <Cards item={item} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
