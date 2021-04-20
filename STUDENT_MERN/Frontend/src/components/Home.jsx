import React, { useState } from 'react'
import { useStateValue } from '../StatrProvider'
import Login from './Login'
import Nav from './Nav'
import Register from './Register'
import StudentsDashboard from './StudentsDashboard'
import './styles/Home.css'
const Home = () => {

    const [{valid}] = useStateValue();
    return (
        <>
        <Nav />
        <div className='home'>
        {
            !valid ? (
                <div className='login_signup'>
                    <Login />
                    <Register />
                </div>
            ) : (
                <StudentsDashboard />
            )
        }
           
        </div>
        </>
    )
}

export default Home
