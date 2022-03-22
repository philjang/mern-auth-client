import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

export default function Login ({ currentUser, setCurrentUser }) {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [msg, setMsg] = useState('')

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            // post to the backend with the form data to log in
            const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/api-v1/users/login', form)
            // console.log(response)
            // decode the token that is sent to use
            const { token } = response.data
            const decoded = jwt_decode(token)
            // console.log(decoded)

            // save the token in localstorage
            localStorage.setItem('jwt', token)

            // set the app state to the logged in user
            setCurrentUser(decoded)
            
        } catch (err) {
            // handle errors such as wrong credentials
            if (err.response.status === 400) {
                // console.log(err.response.data)
                setMsg(err.response.data.msg)
            }
            console.log(err)
            // console.log(err.response)
        }
    }

    // navigate to the user's profile if currentUse is not null
    if (currentUser) return <Navigate to='/profile' />
    return (
        <div>
            <h3>Login form:</h3>
            <p>{msg ? `message from server: ${msg}` : ''}</p>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" placeholder='user@domain.com' onChange={e => setForm({...form, email: e.target.value})} value={form.email} />
                
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" onChange={e => setForm({...form, password: e.target.value})} value={form.password} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}