import React from "react";
// import {Loginuser} from "./loginuser";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment'

function Register() {

    let navigate = useNavigate()

    function objectToFormData(obj) {
        const formData = new FormData();
      
        Object.entries(obj).forEach(([key, value]) => {
          formData.append(key, value);
        });
      
        return formData;
      }      

    let [form,setform]=useState({
        name : "",
        email : "",
        phoneNo : "",
        password : "",
        join_date : `${moment().format('L')}`
    })

    let submitform = objectToFormData(form)
    console.log(submitform)

    const handleClick = (e) =>{
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (form.password != document.getElementById("comfirmpassword").value){
            document.getElementById("showalert").style.display="block"
        }
        else{
            document.getElementById("showalert").style.display="none"
            axios.post(`http://ajil.pythonanywhere.com/t_register`,submitform).then((res)=>{
                console.log(res)
                navigate("/login")
            }).catch((err)=>{
                alert(err)
            })
        }
    }

  return (
<Container >
  <h1>Register</h1>
    <Form method="POST" onSubmit={handleSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="name" onChange={handleClick} placeholder="Enter name" required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleClick} placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone no</Form.Label>
        <Form.Control type="text" name="phoneNo" onChange={handleClick} placeholder="Phone Number" required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleClick} placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="c_password" id="comfirmpassword" name="confirmpassword" placeholder="Comfirm Password" required/>
      </Form.Group>
    
      <Alert key="warning" variant="warning" id="showalert" style={{display: "none"}}>
          check password!
        </Alert>
      
      <Button variant="success" type="submit">Register</Button>
    </Form>
    </Container>
  );
}

export default Register;



    

