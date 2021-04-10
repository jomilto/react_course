import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import Loading from '../components/Loading';
import PageError from '../components/PageError';
import Badge from '../components/Badge';

import api from '../api';

class BadgeDetails extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true , error:null });

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({ loading: false, data: data });
        }catch(error){
            this.setState({ loading: false, error: error });

        }
    }

    render() {
        if(this.state.loading){
            return <Loading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />
        }

        const badge = this.state.data;
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
}

export default BadgeDetails;