import { Fragment } from "react";
import { auth } from './firebase.js'
import { React, useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from "react-router-dom";

import './SignIn.css';


function SignIn() {

    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const signInFunction = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    // alert(user.email + " Sign In successfull ! please wait");
                    document.getElementById("signIn").className = "alert alert-success";
                    document.getElementById("signIn").innerHTML = user.email + " Sign In successfull ! please wait";

                })
                .catch((error) => {
                    // alert("Sign In failed ! " + error.code);
                    document.getElementById("signIn").className = "alert alert-danger";
                    document.getElementById("signIn").innerHTML = "Invalid Credentials";
                });

        } catch (error) {
            alert(error.message);
        }
    }

    const forgotPassWord = async () => {
        var email = prompt("please enter the email");

        if (email === null) {
            return;
        }

        await sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                // alert("Password reset mail sent to " + email + ". please check your spam folder.");
                document.getElementById("signIn").className = "alert alert-success";
                document.getElementById("signIn").innerHTML = "Password reset mail sent to " + email + ". please check your spam folder.";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
            });
    }

    return (
        <Fragment>
            <div className="row">
                <div className="container ">

                    <center><small>
                        <span id="signIn"
                            className="signup-response"
                            role="alert"></span>
                    </small></center>

                    <div className="login-section col-sm-12 ">
                        <div className="px-4 py-3">
                            <h5 className='mb-3'>Sign in</h5>
                            <p className='mt-3 mb-3'>Manage all your deals efficiently with Document Management System</p>
                            <div className="mb-3">
                                <label htmlfor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={event => setSignInEmail(event.target.value)} className="form-control" id="signInEmail" placeholder="email@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlfor="exampleDropdownFormPassword1" className="form-label">Password</label>
                                <input type="password" onChange={event => setSignInPassword(event.target.value)} className="form-control" id="signInPassword" placeholder="Password" />
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                    <label className="form-check-label" htmlfor="dropdownCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <button
                                onClick={() => signInFunction()
                                }
                                className="btn btn-primary mb-3">Sign in</button>
                            <a className="dropdown-item" href="#"><em><Link className="links-section" to="/signup">New around here? Sign up</Link></em></a>
                            <a className="dropdown-item" href="#" onClick={() => forgotPassWord()}><em>Forgot password?</em></a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignIn;