import React from 'react';

import './styles/Hero.css';
import image from '../images/badge-header.svg';

class Hero extends React.Component {
   render() {
       return (
           <div className="Hero">
                <img className="img-fluid" src={image} alt="logo" />
           </div>
       );
   }
}

export default Hero;