import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { navItems } from '../../../data'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logout } from '../../../services/auth.login';
import { useSelector } from 'react-redux';

export function Header() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartreducer.cart)
  const token = JSON.parse(localStorage.getItem("admin"));
  return (
    <Navbar bg="dark" variant="dark">
      <Container className=''>
        <Navbar.Brand as={NavLink} to="/Home">Bi<span className='color-name'>3li</span></Navbar.Brand>
        <Nav className="me-auto">
          {navItems && navItems.map((item, index) => {
            return (<Nav.Link key={index} onClick={() => navigate(`/Category/${item.path}`)} >{item.text}</Nav.Link>)
          })
          }

        </Nav>
        <Nav.Link className='cart' variant="dark  " onClick={() => navigate("/ListProductsBuy")}>
          <i className="fa-solid fa-cart-shopping "></i>
          <span style={{ left: "18%", bottom: "5px" }} className="position-relative  translate-middle badge rounded-pill bg-danger">

            {token ? cart.length : 0}

          </span>
        </Nav.Link>

        {/* <Nav.Link as={NavLink} to="/Login" className='float-end text-white'> Login </Nav.Link> */}


        {token ? <div >

          <NavDropdown className='drop text-white' title={<span>user <i className="fa-solid fa-circle-user  "></i></span>} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={logout} href="/Home">Logout</NavDropdown.Item>
            <NavDropdown.Item href="/Profile">     Profile   </NavDropdown.Item>

          </NavDropdown>


        </div>



          : <Nav.Link onClick={() => navigate("/Login")} className='cart position-relative' variant="dark "> Login <i className="fa-solid fa-right-to-bracket"></i></Nav.Link>}
      </Container>
    </Navbar>

  )
}
