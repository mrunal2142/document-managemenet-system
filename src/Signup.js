import { Fragment, useState } from 'react';
import './Signup.css';
import { Link } from "react-router-dom";
import { auth } from './firebase.js';
import { RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from "firebase/auth";


function Singup() {

    let verifyOtpElement = document.getElementById("verifyOtp")
    let otpNumberElement = document.getElementById("otpNumber")
    let phNumberElement = document.getElementById("phNumber")
    let sendOtpElement = document.getElementById("sendOtp")
    let isVerified = false

    const [user, SetUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        passWord: "",
    });

    const [number, SetNumber] = useState('')
    const [otp, SetOtp] = useState('')

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, auth);
    }

    const mobileVerification = async () => {
        phNumberElement.disabled = true;
        sendOtpElement.disabled = true;
        try {
            generateRecaptcha();
            let appVerifier = window.recaptchaVerifier;
            await signInWithPhoneNumber(auth, number, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    otpNumberElement.disabled = false;
                    verifyOtpElement.disabled = false;
                    // ...
                }).catch((error) => {
                    // Error; SMS not sent
                    // ...
                    otpNumberElement.disabled = true;
                    verifyOtpElement.disabled = true;
                    console.log("error in signInWithPhoneNumber " + error.message)
                });

        } catch (error) {
            alert("mobileVerification " + error.message);
        }
    }

    const verifyOtp = () => {
        verifyOtpElement.disabled = true;
        otpNumberElement.disabled = true;
        try {
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                // ...
                alert("Otp verified !" + user.uid)
                isVerified = true;
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                verifyOtpElement.disabled = false
                otpNumberElement.disabled = false
                console.log("error" + error.message)
            });
        } catch (error) {
            console.log("verifyOtp " + error.message);
        }
    }

    const signUp = () => {
        // 1. Phone auth
        // 2. email auth
        // 3. upload to database (fName, LName , Email , emailUID , phoneUID)
    }

    return (
        <Fragment>
            <div className='row'>
                <div className='container'>
                    <div className='signup-section col-sm-12 px-4 py-3'>
                        <div>
                            <h5 className='mb-3'>Sign up</h5>
                            <h6 className='mt-3'>Manage all your deals efficiently</h6>
                            <p>let's get you all setup so you can verify your personal account and start Managing</p>
                            <div className='row mt-4 col-sm-12'>
                                <div className="col-lg-4 ">
                                    <label htmlFor="Name" className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="First name" id='firstName' />
                                </div>
                                <div className="col-lg-4 ">
                                    <label htmlFor="LastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last name" id='lastName' />
                                </div>
                            </div>

                            {/* email and password*/}
                            <div className='row mt-4 col-sm-12'>
                                <div className="col-lg-4 ">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder='email@example.com' id='inputEmail' />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder='*******' id="inputPassword" />
                                </div>
                            </div>

                            {/* phone number */}
                            <div className='row mt-4 col-sm-12'>
                                <div className='col-lg-7'>
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" onChange={event => SetNumber(event.target.value)} className="form-control" placeholder='10 Digit number' id='phNumber' />
                                </div>
                                <div className='col-lg-4'>
                                    <button onClick={() => mobileVerification()} className="btn btn-outline-primary btn-sm mt-4" id="sendOtp">Send otp</button>
                                </div>
                            </div>

                            {/* otp verification */}
                            <div className='row col-sm-12 mt-4'>
                                <div className='col-lg-7'>
                                    <label htmlFor="inputPassword4" className="form-label">Otp</label>
                                    <input className="form-control" placeholder='6 digit otp' onChange={event => SetOtp(event.target.value)} id="otpNumber" />
                                </div>
                                <div className='col-lg-4'>
                                    <button onClick={() => verifyOtp()} type="button" className="btn btn-outline-primary btn-sm mt-4" id="verifyOtp" >verify otp</button>
                                </div>
                            </div>


                            {/* sign up and sign in  */}
                            <div className="col-12 mt-4 col-sm-12">
                                <button onClick={() => {
                                    signUp()
                                }} className="btn btn-primary">Sign up</button>
                                <p className='mt-2'><em><Link className="links-section" to="/signin">Already have an account ? Sign In</Link></em> </p>
                            </div>
                        </div>
                    </div>

                    <div id="recaptcha-container"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Singup;