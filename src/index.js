import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css';

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('app');

// ReactDOM.render(
//     <Badge 
//         firstName='Jomilto' lastName='Fajardo'
//         avatarUrl='https://www.gravatar.com/avatar?d=identicon'
//         jobTitle='FrontEnd Engineer'
//         twitter='jomilto'
//     />,
//     container
// );

ReactDOM.render(
    <Badges
    />,
    container
);