import React, { Component } from 'react'
import './style.css'

export default class PasswordStrength extends Component {
  render() {
    if(this.props.strength >= 100){
        return (
            <article className='password-strength'>
                <div className='backLine'>
                    <div className='password-strength-meter-very-strong'></div>
                </div>
                <div className='reasons-very-strong'>Very Strong Password</div>
            </article>
        )
    }else if(this.props.strength >= 80){
        return (
            <article className='password-strength'>
                <div class='backLine'>
                    <div className='password-strength-meter-strong'></div>
                </div>
                <div className='reasons-strong'>You are good to go</div>
            </article>
        )
    }else if(this.props.strength >= 60){
        return (
            <article className='password-strength'>
                <div class='backLine'>
                    <div className='password-strength-meter-medium'></div>
                </div>
                <div className='reasons-medium'>Not bad but you know you can do it better</div>
            </article>
        )
    }else if(this.props.strength >= 40){
        return (
            <article className='password-strength'>
                <div class='backLine'>
                    <div className='password-strength-meter-low'></div>
                </div>
                <div className='reasons-low'>Very Weak Password</div>
            </article>
        )
    }
  }
}