import React from 'react';

import './styles/Hero.css';
import image from '../images/platziconf-logo.svg';

class Hero extends React.Component {
   render() {
       return (
           <div className="Hero">
                <img className="Hero-image img-fluid" src={image} alt="logo" />
           </div>
       );
   }
}

export default Hero;