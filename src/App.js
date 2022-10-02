import { Fragment } from 'react';
import './App.css';
import SignIn from './SignIn';
import React from 'react';
import Singup from './Signup';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Dashboard';



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
                <a class="nav-link active" aria-current="page" ><Link className="links-section" to="/">Home</Link></a>

                <a class="nav-link active">About&nbsp;us</a>
                <a class="nav-link active">Contact&nbsp;us</a>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/signup">
            <Singup/>
          </Route>
          <Route exact path="/signin">
            <SignIn/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App;