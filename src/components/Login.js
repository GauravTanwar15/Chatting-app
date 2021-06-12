import React from 'react';
import { GoogleOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons' ;
import "firebase/app";

 import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h1>Hello world</h1>
                <h3><i>here only Developers talk!</i></h3>
                <br></br>

                <div  
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >

                    <GoogleOutlined /> Sign In with Google
                </div>
                <br /> <br />
                <div 
                    className="login-button github"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}
                >
        
                    <GithubOutlined /> Sign In with Github
                </div>
                
                <br />
                <h4><i>Social media</i></h4>
                
                <div 
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;