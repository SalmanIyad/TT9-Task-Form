import React, { Component } from 'react'
import './style.css'

export default class ArrowBack extends Component {
  render() {
    return (
        <div className='Arrow_back_container' onClick={()=>this.props.changePage('login')}>
            <img src={'./assets/images/arrow_back_icon.png'} alt="ArrowBackIcon" />
            <h4>Back</h4>
        </div>
    )
  }
}