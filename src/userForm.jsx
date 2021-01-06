import React, { Component } from 'react'
import axios from 'axios'

class UserForm  extends Component {
    constructor(props) {
        super()
        this.state = {
            user:''
        }
    }
    async componentDidMount() {
        const { data } = await axios.get(`http://localhost:9001/user/${this.props.match.params.id}`)
        this.setState({user:data})
        console.log(this.state)
    }
    handleChange = (e) => {
        const user = { ...this.state.user }
        user[e.currentTarget.name] = e.currentTarget.value
        this.setState({user})
    }
    
     handleSubmit = async (e) => {
        e.preventDefault()
       const response=await axios.put("http://localhost:9001/user/update",this.state.user)
        console.log("response", response)
        this.props.history.push("/users")
    }

    render() {
       const {id, name, username, email, password}=this.state.user
        return (
            <div className="container">
                <h1>Update User </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id">Id</label>
                        <input value={id} name="id" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" >Name</label>
                        <input onChange={this.handleChange} value={name} name="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={this.handleChange} value={username} name="username" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} value={password} name="password" type="password" className="form-control" />
                    </div>
                  
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} value={email} name="email" type="text" className="form-control" />
                    </div>
                <button className="btn btn-primary"  type="submit">Update</button>
                </form>
                
            </div>
           
          );
    }
}
 
 
export default UserForm;