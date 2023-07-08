import React, { Component } from 'react'

export default class Logo extends Component {
  render() {
    return (
        this.props.type === 'register'? <img src={'./assets/images/blue-logo.png'} alt='blue-logo'></img> : <img src={'./assets/images/white_logo.png'} alt='white-logo'></img>
    )
  }
}