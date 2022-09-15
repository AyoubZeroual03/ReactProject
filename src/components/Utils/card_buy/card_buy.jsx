import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { removetocart,additemtocart,removeitemtocart } from '../../../redux/reducers/cartreducer';
import "./style.css"



export const CartBuy = ({item}) => {
  const dispatch =useDispatch();

  return (

    <Card className="mb-2 text-start" style={{ width: '18rem'}}>
    <Card.Img className="p-3" variant="top" style={{height:"220px"}}  src={item.image} />
    <Card.Body>
      <Card.Title > <p className='overflow-clip'>{item.title}</p></Card.Title>
      <Card.Text>
      {item.price} $  qte : {item.qte}
      </Card.Text>
      <Button className='btn btn-success text-white'  style={{fontSize:"20px"}} onClick ={()=>dispatch(additemtocart(item))} >+</Button> 
      <Button  className='btn btn-warning text-white' style={{fontSize:"20px"}} onClick ={()=>dispatch(removeitemtocart(item))} >-</Button> 
      <br/>
      <br/>
     
     
      <Button   style={{backgroundColor:"red",color:"white"} } onClick ={()=>dispatch(removetocart(item))}>Delete</Button> 
      <Button  className='float-end' style={{backgroundColor:"orange"}} >Buy Now</Button>
      
      
    </Card.Body>
  </Card>
  )
}
