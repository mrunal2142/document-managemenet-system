import { Fragment } from 'react';
import './App.css';
import SignIn from './SignIn';
import React from 'react';
import Singup from './Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Fragment>
        <nav class="navbar navbar-expand-lg navbar-section">
          <div className='container'>
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Document-Management-System</a>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" ><Link to="/"></Link>Home</a>
                <a class="nav-link active"><Link className="links-section" to="/signin">Sign&nbsp;In</Link></a>
                <a class="nav-link active"><Link className="links-section" to="/signup">Sign&nbsp;Up</Link></a>
                <a class="nav-link active">Contact&nbsp;us</a>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/signup">
            <Singup />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          {/* <Route path="/">
            <singIn/>
          </Route> */}
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App;