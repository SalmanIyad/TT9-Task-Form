import React, { Component } from 'react'

export default class SocialMedia extends Component {
  render() {
    return (
    <div className='social-media-icons'>
        <div><img src={'./assets/images/google.png'} alt="google" /></div>
        <div><img src={'./assets/images/twitter.png'} alt="twitter" /></div>
        <div><img src={'./assets/images/linkedin.png'} alt="linkedin" /></div>
        <div><img src={'./assets/images/github.png'} alt="github" /></div>
    </div>
    )
  }
}