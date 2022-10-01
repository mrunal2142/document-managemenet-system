import { Fragment } from "react";
import './SignIn.css';


function SignIn() {

    return (
        <Fragment>
            <div className="row">
            <div className="container ">
                <div className="login-section col-sm-12 ">
                    <form className="px-4 py-3">
                        <h5 className='mb-3'>Sign in</h5>
                        <p className='mt-3 mb-3'>Manage all your deals efficiently with Document Management System</p>
                        <div className="mb-3">
                            <label htmlfor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlfor="exampleDropdownFormPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" htmlfor="dropdownCheck">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Sign in</button>

                        <a className="dropdown-item" href="#"><em>New around here? Sign up</em></a>
                        <a className="dropdown-item" href="#"><em>Forgot password?</em></a>
                    </form>
                </div>
            </div>
            </div>
           
        </Fragment>
    )
}

export default SignIn;