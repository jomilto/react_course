import React from 'react';

import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                 <div className="Badge__header">
                     <img src={confLogo} alt="logo de la conf" />
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="avatar" />
                    <h1>Jomilto <br /> Fajardo</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Frontend Engenier</h3>
                    <div>@jomilto</div>
                </div>
                <div className="Badge__footer">
                    #platziConf
                </div>
            </div>
        );
    }
}

export default Badge;