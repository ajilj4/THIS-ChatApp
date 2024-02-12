import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setcurrentuser } from "../redux/currentuser";;

export default function Login() {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let [islogin,setislogin]=useState(false)

    function objectToFormData(obj) {
        const formData = new FormData();
      
        Object.entries(obj).forEach(([key, value]) => {
          formData.append(key, value);
        });
      
        return formData;
      }      

    let [form, setform] = useState({
        email: "",
        password: ""
    })
    let submitlogin = objectToFormData(form)

    const handleClick = (e) =>{
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://ajil.pythonanywhere.com/t_login",submitlogin).then((res)=>{
            console.log(res)
            
            if (res.data.status === "success"){
                setislogin(true)
                // console.log(res.data.data)
                dispatch(setcurrentuser([res.data.data]))
                localStorage.setItem("chatid",res.data.data.id)
                navigate("/")
               
            }
            else{
                document.getElementById("showalert").style.display="block"
                setislogin(false)
            }
        }).catch((err)=>{
            alert(err)
        })
    }
    
    return (
        <>
            <Container>

                <h1>Login</h1>
                <Alert key="warning" variant="warning" id="showalert" style={{ display: "none" }}>
                    check email or password!
                </Alert>

                <Form onSubmit={handleSubmit} method="POST">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleClick} placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleClick} placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="success" type="submit">{!islogin?<h5>Login</h5>:<Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />}</Button>
                </Form>
            </Container>
        </>
    )
}