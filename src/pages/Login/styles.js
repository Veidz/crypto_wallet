import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-32deg, #d1d1d1, #dedede);
  width: 100vw;
  height: 100vh;
`

export const LoginFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 60%;
`

export const LeftLoginForm = styled.div`
  height: 100%;
  width: 30%;
  background-color: #2e2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 10px 2px #202021;
`

export const RightLoginForm = styled.div`
  height: 100%;
  width: 70%;
  background-color: white;
  box-shadow: 5px 10px 2px #bababa;
  display: flex;
  flex-direction: column;
`

export const Logo = styled.img`
  width: 128px;
  height: 128px;
`

export const Title = styled.h1`
  text-align: center;
  color: #f5b94c;
  letter-spacing: 8px;
  font-family: "Pacifico";
  text-decoration: underline;
`

export const LoginInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: blue; */
`

export const LoginInput = styled.input`
  width: 50%;
  background-color: transparent;
  margin: 10px;
  /* padding: 1em; */
  padding-top: 1em;
  padding-right: 1em;
  padding-bottom: 1em;
  outline: none;
  border-bottom-width: 2px solid;
  border-bottom-color: #f5b94c;
  border-top: none;
  border-right: none;
  border-left: none;
  font-family: inherit;
  opacity: 1;
  color: black;
  font-size: 1.1em;

  &::placeholder {
    transition: 0.4s ease-in;
    color: #9c9c9c;
  }

  &:focus::placeholder {
    opacity: 0;
    transform: translateY(-50px);
    transition: 0.8s ease-out;
  }
`

export const LoginButton = styled.button`
  width: 50%;
  /* background-color: red; */
  font-size: 1.1em;
  margin-top: 30px;
  padding: 0.7em;
  background-color: #f5b94c;
  border: none;
  font-family: inherit;
  cursor: pointer;
  transition: 0.2s ease-in;
  
  &:hover {
    transform: scale(1.02);
  }
`

export const CreateAccountContainer = styled.div`
  width: 50%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9em;
`

export const CreateAccountButton = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline 4px;
  text-decoration-color: #f5b94c;
  color: #f5b94c;
  font-family: inherit;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.10);
  }
`
