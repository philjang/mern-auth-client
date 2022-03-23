import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'

export default function Register ({ currentUser, setCurrentUser }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
    })
    const [msg, setMsg] = useState('')

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (form.password === form.passwordCheck) {
            // remove unneeded data in the form pre-request
            delete form.passwordCheck
            try {
                const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/api-v1/users/register', form)
                const { token } = response.data
                localStorage.setItem('jwt', token)
                const decoded = jwt_decode(token)
                setCurrentUser(decoded)
            } catch (err) {
                if (err.response.status === 409) {
                    setMsg(err.response.data.msg)
                }
                console.log(err)
            }
        } else setMsg('passwords do not match')
    }

    if (currentUser) return <Navigate to='/profile' />

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={10} md={6}>
                        <h3>Sign Up:</h3>
                        <p>{msg ? `message from server: ${msg}` : ''}</p>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name:</Form.Label>
                                <Form.Control id="name" type="text" placeholder='John Doe' onChange={e => setForm({...form, name: e.target.value})} value={form.name} required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="email">Email:</Form.Label>
                                <Form.Control id="email" type="email" placeholder='user@domain.com' onChange={e => setForm({...form, email: e.target.value})} value={form.email} required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="password">Password:</Form.Label>
                                <Form.Control id="password" type="password" onChange={e => setForm({...form, password: e.target.value})} value={form.password} required />
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label htmlFor="passwordCheck">Confirm Password:</Form.Label>
                                <Form.Control id="passwordCheck" type="password" onChange={e => setForm({...form, passwordCheck: e.target.value})} value={form.passwordCheck} required />
                            </Form.Group>

                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}