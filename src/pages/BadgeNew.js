import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
   state = { form: {
       firstName: '',
       lastName: '',
       email: '',
       jobTitle: '',
       twitter: ''
   }};

   handleChange = e =>{
       this.setState({
           form: {
               ...this.state.form,
               [e.target.name]: e.target.value
           }
       })
   };

   render() {
       return (
           <div>
               <Navbar />
               <Hero />
               <div className="container">
                   <div className="row">
                       <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatarUrl='https://www.gravatar.com/avatar?d=identicon'
                            />
                       </div>
                       <div className="col-6">
                           <BadgeForm onChange={this.handleChange} 
                           formValues={this.state.form}/>
                        </div>
                   </div>
               </div>
           </div>
       );
   }
}

export default BadgeNew;