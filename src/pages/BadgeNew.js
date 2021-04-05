import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
   render() {
       return (
           <div>
               <Navbar />
               <Hero />
               <div className="container">
                   <div className="row">
                       <div className="col-6">
                            <Badge 
                                firstName='Jomilto' lastName='Fajardo'
                                avatarUrl='https://www.gravatar.com/avatar?d=identicon'
                                jobTitle='FrontEnd Engineer'
                                twitter='jomilto'
                            />
                       </div>
                       <div className="col-6">
                           <BadgeForm />
                        </div>
                   </div>
               </div>
           </div>
       );
   }
}

export default BadgeNew;