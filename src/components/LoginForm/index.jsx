import React, { Component } from 'react'
import SocialMedia from '../SocialMedia'
import HorizontalLine from '../HorizontalLine'
import Swal from 'sweetalert2'
import ErrorMsg from '../ErrorMsg'
import './style.css'

export default class LoginForm extends Component {

  state = {
    email:'',
    password:'',
    alert:'',
    msg:'',
  }

  onChange = (e)=>{
    const {name,value} = e.target
    this.setState({[name]:value})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.state.password.length < 8){
      this.setState({alert:'error',msg:'your password should be at least 8 characters'})
    }else if(this.props.checkUser(this.state) === 'inValid'){
      this.setState({alert:'error',msg:'your password should be at least 8 characters'})
    }else if(this.props.checkUser(this.state) === 'invalid password'){
      this.setState({alert:'error',msg:'your password should be at least 8 characters'})
    }else{
      this.setState({alert:'success',msg:`logged in succsessfuly, welcome again ${this.state.email.split('@')[0]}`})
      Swal.fire(
        'logged in successfuly!',
        `welcome ${this.state.email.split('@')[0]}`,
        'success'
      )
    }
  }

  render() {
    return (
      <div className='form-section login-form-section'>
        <div className='form-header form-login-header'>
          <h2>Join the game!</h2>
          <p>Go inside the best gamers social network!</p>
        </div>
        <SocialMedia />
        <HorizontalLine />
        <form onSubmit={this.handleSubmit}>
          {this.state.alert === 'success' && <ErrorMsg alertType={this.state.alert}>{this.state.msg}</ErrorMsg>}
          <div className='form-input'>
              <label htmlFor="email">Your email</label>
              <input type="email" name='email' value={this.state.email} onChange={this.onChange} placeholder='Enter email address' required/>
          </div>
          <div className='form-input'>
              <label htmlFor="password">Enter your password</label>
              <input type="password" name='password' value={this.state.password} onChange={this.onChange} placeholder='Password' required/>
          </div>
          {this.state.alert === 'error' && <ErrorMsg alertType={this.state.alert}>{this.state.msg}</ErrorMsg>}
          <div className='form-submit'>
              <button type='submit'>Login</button>
          </div>
        </form>
        <div className='form-login-footer'>
            <h4>Dont have an account? </h4>
            <button onClick={()=> this.props.changePage('register')}> Register </button>
        </div>
      </div>
    )
  }
}