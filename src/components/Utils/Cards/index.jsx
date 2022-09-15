import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../../redux/reducers/cartreducer';
import "./style.css"

export const Cards = ({item}) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();


  return (
    <Card className="mb-2 text-start" style={{ width: '18rem'}}>
      <Card.Img className="p-3" variant="top" style={{height:"220px"}}  src={item.image} />
      <Card.Body>
        <Card.Title ><p className='overflow-clip' >{item.title}</p></Card.Title>
        <Card.Text>
        {item.price} $
        </Card.Text>
        <Button onClick={()=>navigate(`/Detail/${item.id}`)}  style={{backgroundColor:"orange"} } >Detail</Button>
        <Button  className='float-end' onClick={()=>dispatch(addtocart({...item,qte:1}))}  style={{backgroundColor:"green",color:"white"}} >Add to cart</Button>
        
         
      </Card.Body>
    </Card>
  );
}
