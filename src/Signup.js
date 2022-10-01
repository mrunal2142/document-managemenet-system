import { Fragment } from 'react';
import './Signup.css';


function Singup() {

    return (
        <Fragment>
            <div className='row'>
                <div className='container'>
                    <div className='signup-section col-sm-12 px-4 py-3'>
                        <form>
                            <h5 className='mb-3'>Sign up</h5>
                            <h6 className='mt-3'>Manage all your deals efficiently</h6>
                            <p>let's get you all setup so you can verify your personal account and start Managing</p>

                            <div className='row mt-4 col-sm-12'>
                                <div class="col-lg-4 ">
                                    <label for="Name" class="form-label">First Name</label>
                                    <input type="text" class="form-control" placeholder="First name" id='firstName' />
                                </div>
                                <div class="col-lg-4 ">
                                    <label for="LastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last name" id='lastName' />
                                </div>
                            </div>

                            {/* phone number and email */}
                            <div className='row mt-4 col-sm-12'>
                                <div class="col-lg-4 ">
                                    <label for="PhoneNumber" class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control" placeholder="+91 1234567890" id='phoneNumber' />
                                </div>

                                <div class="col-lg-4 ">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder='email@example.com' id='inputEmail' />
                                </div>
                            </div>

                            {/* password and confirm password */}
                            <div className='row mt-4 col-sm-12'>
                                <div class="col-lg-4">
                                    <label for="inputPassword4" class="form-label">Password</label>
                                    <input type="password" class="form-control" placeholder='*******' id="inputPassword" />
                                </div><div class="col-lg-4">
                                    <label for="inputPassword4" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" placeholder='*******' id="confirmInputPassword" />
                                </div>
                            </div>

                            {/* sign up and sign in  */}
                            <div class="col-12 mt-4 col-sm-12">
                                <button type="submit" class="btn btn-primary">Sign up</button>
                                <p className='mt-2'><em>Already have an account ? Sign In</em> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Singup;