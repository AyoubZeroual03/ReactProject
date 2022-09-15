import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginShema } from '../../helpers/loginShema';
import log from "../../img/lo2.svg"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {Authlogin} from "../../services/auth.login"
import "./style.css"
import { useNavigate } from 'react-router';




export const Login = () => {
const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(LoginShema) })
  const onSubmit = (data) => {
    console.log(data);
    const {email,password}=data;
    if(Authlogin({email,password})){
      
      navigate("/Home")

    }else{alert("uncorrect password")}

  }

  return (


    <Container>
      <Row>
        <Col className=" p-5 col col-md-6"> <img src={log} width={'450px'} height={"500px"} /></Col>
        <Col className="col col-md-6 m-auto ">
          <div className='log align-self-center p-5 m-auto  '>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <h1 className=''> Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="write your email" id="email" {...register("email")} />
                <Form.Text className="text-muted">
                  <p className='text-danger'>{errors.email?.message}</p>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="write your Password" id="Password" {...register("password")} />
                <Form.Text className="text-muted">
                  <p className='text-danger'>{errors.password?.message}</p>
                </Form.Text>
              </Form.Group>

              <Button className='bg-warning' variant="primary" type="submit" >
                Submit
              </Button>

              <p onClick={()=>navigate("/Register")}> Create  a new account </p>
            </Form>
          </div>



        </Col>
      </Row>
    </Container>



  )
}
