import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'


const Counter = (props) => {
    
    const [users, setUsers]=useState([])

    useEffect(() => {
        async function  getUsers() {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(result.data)
        } 
     getUsers()
    }

    )

    return (
        <div>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
           </ul>
        </div>
    )
};

export default Counter

