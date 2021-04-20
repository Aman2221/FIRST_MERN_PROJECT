import React, { useState, useEffect } from 'react'
import { useStateValue } from '../StatrProvider';
import StudentsDashboard from './StudentsDashboard'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{valid}, dispatch] = useStateValue();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const res = await fetch('http://localhost:5000/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email, 
                password
            })
        })

        const data = await res.json();
        if(res.status === 401){
            window.alert('The user may get deleted or invalid creditionals') 
        }
        else {
            window.alert('Login successfull')
            dispatch({
                type : 'SET_VALID',
                valid : true
            })
        }
    }
    return (
        <>
        {
            valid ? (
                 <StudentsDashboard />
            ) : (
            <div className='login'>

                <form action="POST">
                        <h4>Login</h4>
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
                        <button onClick={handleLogin}>Log in</button>
                </form>
            </div>
            )
        }
        </>
    )

}

export default Login
