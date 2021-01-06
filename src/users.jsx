  import React, { Component } from 'react'
import axios from 'axios'
  import {Link} from 'react-router-dom'

class Users extends Component {
    state = {
        users: []
    }
    async componentDidMount() {

       const response = await axios.get('http://localhost:9001/user/')
       this.setState({ users:response.data })
       console.log(response.headers)
    }

    handleClick =async  (user) => {
        const users = [...this.state.users]
        const filteredUsers = users.filter((element ,key)=> element.id !== user.id)
        this.setState({ users: filteredUsers })
        
        const response =await  axios.delete(`http://localhost:9001/user/delete/${user.id}`)
        console.log("delete",response)
        
    }
    render() {
        return (
            <div>
                <h1>Users</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th></th>          
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <tr key={user.id}>
                               <td>{user.id}</td>
                                <td><Link to={`/users/${user.id}`}>{user.name}</Link></td> 
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => this.handleClick(user)} className="btn btn-danger btn-sm m-2">Delete</button></td>
                            </tr>
                            )}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
export default Users;