import React, { Fragment } from 'react';
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <Fragment>
            <a class="nav-link active"><Link className="links-section" to="/signin">Sign&nbsp;In</Link></a>
            <a class="nav-link active"><Link className="links-section" to="/signup">Sign&nbsp;Up</Link></a>
        </Fragment>
    );
}

export default HomePage;