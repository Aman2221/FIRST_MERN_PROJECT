import React, { useState } from 'react'
import StudentsDashboard from './StudentsDashboard';
import { useStateValue } from '../StatrProvider';

import './styles/Home.css'
const Register = () => {
    const [{valid}, dispatch] = useStateValue();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [name , setName] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/signup', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name,
                email,
                password
            })
        }) 
        const data = await res.json();
        if(res.status === 401){
            window.alert('Please fill all the fields properly or user aleady exsist')
        }
        else {
            window.alert('user registerd successfullly')
             dispatch({
                type : 'SET_VALID',
                valid : true
            })
        }
    }
    return (
        <div>
            {
                valid ? (
                    <StudentsDashboard />
                ) : (
                    <div className='register'>
                        <form action="POST">
                                <h4>Sign Up</h4>
                                <input type="text" 
                                placeholder='Name'
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                                />
                                <input type="text" 
                                placeholder='Email'
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                />
                                <input type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                />
                                <button onClick={handleSignup}>Signup</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default Register
