import React ,{useRef, useState}from 'react'
import {Form , Button , Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef =  useRef()
    const passwordRef =  useRef()
    const passwordConfimRef =  useRef()
    const { currentUser, updateEmail, updatePassword} = useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const navigate = useNavigate()
    
    function handleSubmit(e){
        e.preventDefault()
          
        if(passwordRef.current.value !==passwordConfimRef.current.value){
            return setError('Password do not match')
        }


        const promises = []
        setLoading(true)
        setError('')

        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            navigate("/")
        }).catch(()=>{
            setError('Fail to update password and email')
        }).finally(()=>{
            setLoading(false)
        })


       
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Update Profile</h2>
                {/* {currentUser.email} */}
                {error && <Alert variant="danger" >{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='emai'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email}></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef}  placeholder='leave a blank to keep the same'></Form.Control>
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmaion</Form.Label>
                        <Form.Control type='password' ref={passwordConfimRef}  placeholder='leave a blank to keep the same'></Form.Control>
                    </Form.Group>

                    <Button disabled={loading} className='w-100 mt-2' type='submit'>
                        Update
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
             <Link to="/">Cancel</Link>
        </div>
    </>
  )
}
