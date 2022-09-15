import React from 'react'
import { Layout } from '../../components/Layout'
import { CartBuy } from '../../components/Utils/card_buy/card_buy';
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"
export const ListProductsBuy = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartreducer.cart)
    const total = useSelector((state) => state.cartreducer.total)


 

    return (
        <Layout >   
            <Container>
                <Row>
                    {cart && cart.map(
                        (item,index) => {
                            return (
                                <Col className='mb-3' md={4} lg={3} sm={6} xs={12} key={index}>
                                    <CartBuy item={item} />
                                </Col>           
                            )
                        })}         
                </Row>

            </Container>
                    
            {total!==0 ?<div className='total' > {parseFloat(total).toFixed(2)} $ </div>:
            <div className='yacine'>
                
                <h1 style={{fontSize:"50px",textAlign:"center",paddingLeft:"500px"}}> No products Found</h1>
            </div>
            
            }
            


              
        </Layout>

    )

}
