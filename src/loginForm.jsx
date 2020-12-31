import React, { Component } from 'react'

class LoginForm extends Component {
    state = {
        currentUser: {
            username: "",
            password: ""
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
    }
 

    handleChange = e => {
        const currentUser = { ...this.state.currentUser }
        currentUser[e.currentTarget.name] = e.currentTarget.value
        this.setState({ currentUser })
    };

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Login Form</h1>
                    <br />
                   
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input onChange={this.handleChange} value={this.state.currentUser.username} name="username" type="text" className="form-control" id="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={this.handleChange} value={this.state.currentUser.password} name="password" type="text" className="form-control" id="password" />
                        </div>
                        <input className="btn btn-primary" type="submit"></input>
                    </form>
                  
                </div>
            </div>
        )
    }
}
  export default LoginForm
        

