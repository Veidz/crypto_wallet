import React from 'react';
import './styles.js'
import { CreateAccountButton, CreateAccountContainer, LeftLoginForm, LoginButton, LoginContainer, LoginFormContainer, LoginInput, LoginInputContainer, Logo, RightLoginForm, Title } from './styles.js';
import logo from '../../assets/images/binance.png';

export default function Login() {
  return (
    <LoginContainer>
      <LoginFormContainer>
        <LeftLoginForm>
          <Logo 
            src={ logo }
            alt="Original Logo"
          />
        </LeftLoginForm>
        <RightLoginForm>
          <Title>Wallet</Title>
          
          <LoginInputContainer>
            {/* Email */}
            <LoginInput
              type="email"
              placeholder="Email"
            />

            {/* Password */}
            <LoginInput 
              type="password"
              placeholder="Password"
            />

            {/* Login Button */}
            <LoginButton>
              Login
            </LoginButton>

            {/* Create Account Button */}
            <CreateAccountContainer>
              <p>Don't have an account?</p>
              <CreateAccountButton>Click here</CreateAccountButton>
            </CreateAccountContainer>
          </LoginInputContainer>
        </RightLoginForm>
      </LoginFormContainer>
    </LoginContainer>
  )
}
