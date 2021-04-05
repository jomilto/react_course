import React from 'react';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div>
                 <div>
                     <img src={confLogo} alt="logo de la conf" />
                </div>
                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar" />
                    <h1>User <br /> Name</h1>
                </div>
                <div>
                    <p>Frontend Engenier</p>
                    <p>@user</p>
                </div>
                <div>
                    <p>#platziConf</p>
                </div>
            </div>
        );
    }
}

export default Badge;