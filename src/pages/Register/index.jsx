import React, { Component } from 'react'
import Logo from '../../components/Logo'
import Container from '../../components/Container'
import LoginContainer from '../../components/LoginContainer'
import TransBackground from '../../components/TransBackground'
import LeftSide from '../../components/LeftSide'
import RightSide from '../../components/RightSide'
import './style.css'

export default class Register extends Component {
  render() {
    return (
        <LoginContainer>
            <TransBackground>
                <Container>
                    <LeftSide 
                        text="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
                        writer='Hideo Kojima'
                        img={'./assets/images/shape1.png'}
                        icon={'./assets/images/blue-coma-icon.png'}
                        logo={<Logo />}
                    />
                </Container>    
            </TransBackground>
    
            <Container>
                <RightSide addUser={this.props.addUser} changePage={this.props.changePage} type='register' />
            </Container>
        </LoginContainer>
    )
  }
}