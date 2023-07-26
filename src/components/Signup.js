import React ,{useRef, useState}from 'react'
import {Form , Button , Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef =  useRef()
    const passwordRef =  useRef()
    const passwordConfimRef =  useRef()
    const { signup, currentUser } = useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
          
        if(passwordRef.current.value !==passwordConfimRef.current.value){
            return setError('Password do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            navigate("/")
        }catch{
            setError('Fail to create account')
        }
        setLoading(false)
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {/* {currentUser.email} */}
                {error && <Alert variant="danger" >{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='emai'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmaion</Form.Label>
                        <Form.Control type='password' ref={passwordConfimRef} required></Form.Control>
                    </Form.Group>

                    <Button disabled={loading} className='w-100 mt-2' type='submit'>
                        Sign Up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Alredy have an account?  <Link to="/login">Log In</Link>
        </div>
    </>
  )
}
