import React, { Component } from 'react'
import Logo from '../../components/Logo'
import Container from '../../components/Container'
import LoginContainer from '../../components/LoginContainer'
import LeftSide from '../../components/LeftSide'
import RightSide from '../../components/RightSide'
import './style.css'

export default class Login extends Component {
  render() {
    return (
      <LoginContainer>
            <Container>
              <LeftSide 
                text="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
                writer='Hideo Kojima'
                img={'./assets/images/register-image.png'}
                icon={'./assets/images/grey-coma-icon.png'}
                logo={<Logo type="register" />}
                type="register"
              />
            </Container> 
               
            <Container>
                <RightSide checkUser={this.props.checkUser} changePage={this.props.changePage}/>
            </Container>
        </LoginContainer>
    )
  }
}