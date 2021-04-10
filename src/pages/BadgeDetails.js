import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import Badge from '../components/Badge';

function BadgeDetails (props) {
    const {badge} = props;
    return (
        <React.Fragment>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Badge 
                            firstName={badge.firstName || 'FIRST_NAME' }
                            lastName={badge.lastName || 'LAST_NAME' }
                            jobTitle={badge.jobTitle || 'TWITTER' }
                            twitter={badge.twitter || 'JOB_TITTLE' }
                            email={badge.email || 'EMAIL' }
                            avatarUrl='https://www.gravatar.com/avatar?d=identicon'
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div className="">
                            <Link 
                                to={`/badges/${badge.id}/edit` } 
                                className="btn btn-primary mb-4"
                                >Edit</Link>
                        </div>

                        <div className="">
                            <button class="btn btn-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BadgeDetails;