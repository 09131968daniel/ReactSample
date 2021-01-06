import React, { Component } from 'react'
import axios from 'axios'

 class RegisterForm  extends Component {
     constructor(props) {
       super()
         this.state = {
            registerUser: {id:'',username: "",password: "",name: "",email:""},
            errors: {}
             }
     }
     
    
     handleChange = e => {
        
         const registerUser = { ...this.state.registerUser }
         registerUser[e.currentTarget.name]=e.currentTarget.value
         this.setState({registerUser})
     }
     handleSubmit=async (e) =>{
         e.preventDefault()
         const errors = this.validate();
         this.setState({ errors: errors || {} })

         
         if (errors !==null) return;
         
         const response = await axios.post('http://localhost:9001/user/new', this.state.registerUser)
         
         this.props.history.push("/login") 
       
    }
         
     validate=()=> {
         const errors = {};
        
         const { username, password, name, email } = this.state.registerUser
       
         if (username.trim() === '')
             errors.username = "Username is empty"
         if (password.trim() === '')
             errors.password = "Password is empty"
         if (name.trim() === '')
             errors.name = "Name is empty"
         if (email.trim() === '')
             errors.email="Email is empty!"
           
         return Object.keys(errors).length === 0 ? null : errors;
     }    
     
     render() {
         const { username, password, name, email } = this.state.registerUser
        
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Register Form</h1>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input value={username} onChange={this.handleChange} name="username" type="text" className="form-control" />
                            {this.state.errors.username && <div className="alert alert-danger" >{this.state.errors.username} </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input value={password} onChange={this.handleChange} name="password" type="text" className="form-control" />
                            {this.state.errors.password && <div className="alert alert-danger" >{this.state.errors.password} </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input value={name} onChange={this.handleChange} name="name" type="text" className="form-control" />
                            {this.state.errors.name && <div className="alert alert-danger" >{this.state.errors.name} </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input value={email} onChange={this.handleChange} name="email" type="text" className="form-control" />
                            {this.state.errors.email && <div className="alert alert-danger" >{this.state.errors.email} </div>}
                        </div>
                        {this.state.registerUser.username}
                        <button  type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>   
            </div>
        )
    }
}
export default RegisterForm