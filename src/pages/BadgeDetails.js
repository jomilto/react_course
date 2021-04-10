import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
    const [count, setCount] = React.useState(0);
    if(count > max ) {
        setCount(0);
    }

    return [count, setCount];
}

function BadgeDetails (props) {
    const [count, setCount] = useIncreaseCount(4);
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
                         <button 
                        onClick={() => {
                            setCount(count +1)
                        }}
                        className="btn btn-primary mb-4">Increase Count: {count}</button>
                            <Link 
                                to={`/badges/${badge.id}/edit` } 
                                className="btn btn-primary mb-4"
                                >Edit</Link>
                        </div>

                        <div className="">
                            <button 
                                className="btn btn-danger"
                                onClick={props.onOpenModal}
                            >Delete</button>
                            <DeleteBadgeModal 
                                onClose={props.onCloseModal}
                                isOpen={props.modalIsOpen}
                                onDeleteBadge={props.onDeleteBadge} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BadgeDetails;