import React, { Component } from 'react'
import axios from 'axios'

class LoginForm extends Component {
    constructor(props) {
        super()
        this.state = {
            currentUser: {
                username: "",
                password: ""
            },
            data: []
        }
    }
    
    componentDidMount() {
        localStorage.removeItem("username")
    }
    
    handleSubmit =async (e) => {
        e.preventDefault()
        const { username, password } = this.state.currentUser;
       
        try {
            const result = await axios.get(`http://localhost:9001/user/login?username=${username}&password=${password}`);

            localStorage.setItem('username',username )
            
            this.props.history.replace('/')
            
        } catch (ex) {
           
            if ((ex.response) && ex.response.status === 409)
                alert("Wrong username or password!")
             else {
                console.log("Logging the error", ex)
                alert("An unexpected error occur!")
            }
        }
    };
 

    handleChange = e => {
        const currentUser = { ...this.state.currentUser };
        currentUser[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ currentUser });
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
        

