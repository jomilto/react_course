import React from 'react';

// import './styles/Hero.css';
// import image from '../images/badge-header.svg';

class BadgeForm extends React.Component {
    state = {};
    
    handleChange = e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // });

        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleClick = e => {
        console.log('Button was clicked.');
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submited');
        console.log(this.state);
    };

   render() {
       return (
           <div className="">
               <h1>New Attendant</h1>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label>First Name:</label>
                       <input 
                       type="text" name="firstName" className="form-control" 
                       onChange={this.handleChange}
                       value={this.state.firstName}/>
                   </div>
                   <div className="form-group">
                       <label>Last Name:</label>
                       <input 
                       type="text" name="lastName" className="form-control" 
                       onChange={this.handleChange}
                       value={this.state.lastName}/>
                   </div>
                   <div className="form-group">
                       <label>Email:</label>
                       <input 
                       type="email" name="Email" className="form-control" 
                       onChange={this.handleChange}
                       value={this.state.email}/>
                   </div>
                   <div className="form-group">
                       <label>Job Title:</label>
                       <input 
                       type="text" name="jobTitle" className="form-control" 
                       onChange={this.handleChange}
                       value={this.state.jobTitle}/>
                   </div>
                   <div className="form-group">
                       <label>Twitter UserName:</label>
                       <input 
                       type="text" name="twitter" className="form-control" 
                       onChange={this.handleChange}
                       value={this.state.twitter}/>
                   </div>
                   <button 
                        className="btn btn-primary"
                        onClick={this.handleClick}
                    >Save</button>
               </form>
           </div>
       );
   }
}

export default BadgeForm;