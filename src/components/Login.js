import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }

    return (
      <LoginContainer>
        <LoginInnerContainer>
            <img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.svg" alt=""></img>
            <h1>Sign in to the Chat App</h1>
            <p>cieplicki.com</p>

            <Button onClick={signIn}>
                Sign in with Google
            </Button>
        </LoginInnerContainer>
      </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background: #0a8d48 !important;
        color: #fff;
    }
`;