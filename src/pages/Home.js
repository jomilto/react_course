import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import image from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

const home = () => {
    return (
        <React.Fragment>
            <div className="container col-12 Home">
                <div className="row">
                    <div className="col-3 left">
                        <div className="row">
                        <img className="img-fluid" src={image} alt="logo" />
                        </div>
                        <div className="row">   
                            <span className="font-weight-bold">Print your Badges</span>
                        </div>
                        <div className="row">
                            <p>The easiest way to manage your conference</p>
                        </div>
                        <Link to="/badges" className="btn btn-primary">Start Now</Link>
                    </div>
                    <div className="col-9 right">
                            <img className="img-fluid" src={astronauts} alt="logo" />
                    </div>
                </div>
           </div>
        </React.Fragment>
    );
};

export default home;