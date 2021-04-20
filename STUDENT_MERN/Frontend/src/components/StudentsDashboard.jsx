import React, { useEffect, useState } from 'react'
import './styles/StudentsDashboard.css'
import axios from 'axios';

const StudentsDashboard = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => await axios.get('http://localhost:5000/getData').then((response) => {
        setData(response.data);
    });

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='StudentsDashboard'>
            <div className="data">
            <ul>
            <li>
                <h5 className='table_head'><i className="fas fa-id-badge"></i>Student id :</h5>
                {
                    data.map((user) => (
                    <p className='table_data'>
                        {user._id}
                    </p>  
                ))}
            </li>  
            <li>
            <h5 className='table_head'><i className="fas fa-address-card"></i>Student Name :</h5>
                {
                    data.map((user) => (
                    <p className='table_data'>
                        {user.name}
                    </p>  
                ))}
            </li>
            <li >
                <h5 className='table_head'><i className="far fa-envelope"></i>Student Email :</h5>
                {
                    data.map((user) => (
                    <p className='table_data'>
                        {user.email}
                    </p>  
                ))}
                
            </li>   
            </ul>
            </div>
        </div>
    )
}

export default StudentsDashboard
