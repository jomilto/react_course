import React from 'react';

import Hero from '../components/Hero';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Loading from '../components/Loading';

import api from '../api';

class BadgeNew extends React.Component {
   state = { 
       loading: false,
       error: null,
       form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };

   handleChange = e =>{
       this.setState({
           form: {
               ...this.state.form,
               [e.target.name]: e.target.value
           }
       });
   };

   handleSubmit =  async e => {
    e.preventDefault();
    this.setState({loading: true, error: null });

    try {
        await api.badges.create(this.state.form);
        this.setState({loading:false});
        this.props.history.push('/badges');
    }catch(error) {
        this.setState({loading:false, error: error });
    }
   };

   render() {
    if(this.state.loading) {
        return <Loading />;
    }

       return (
           <React.Fragment>
               <Hero />
               <div className="container">
                   <div className="row">
                       <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME' }
                                lastName={this.state.form.lastName || 'LAST_NAME' }
                                jobTitle={this.state.form.jobTitle || 'TWITTER' }
                                twitter={this.state.form.twitter || 'JOB_TITTLE' }
                                email={this.state.form.email || 'EMAIL' }
                                avatarUrl='https://www.gravatar.com/avatar?d=identicon'
                            />
                       </div>
                       <div className="col-6">
                           <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                   </div>
               </div>
           </React.Fragment>
       );
   }
}

export default BadgeNew;