import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'
import Users from './users'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './navBar'
import Home from './home'
import NotFound from './notFound'
import UserForm from './userForm'
import ProtectedRoute from './protectedRoute'
import Counter from './counter'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
     
        <div className="content">
          <Switch>
            <Route path="/users/:id" component={UserForm} />
            <ProtectedRoute path="/users" component={Users} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/logout"  to ="/login"  />
            <ProtectedRoute path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    )
  }
}
    export default App;