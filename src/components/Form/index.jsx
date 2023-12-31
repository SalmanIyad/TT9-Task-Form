import React, { Component } from 'react'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'
import './style.css'

export default class Form extends Component {
  render() {
    if(this.props.type === 'register'){
        return (
          <RegisterForm addUser={this.props.addUser} changePage={this.props.changePage} />
        )
      }else{
        return (
          <LoginForm  checkUser={this.props.checkUser} changePage={this.props.changePage} />
        )
      }
    }
   
}