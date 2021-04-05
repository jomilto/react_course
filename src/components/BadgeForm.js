import React from 'react';

// import './styles/Hero.css';
// import image from '../images/badge-header.svg';

class BadgeForm extends React.Component {
    handleChange = e => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });
    };

    handleClick = e => {
        console.log('Button was clicked.');
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submited');
    };

   render() {
       return (
           <div className="">
               <h1>New Attendant</h1>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label>First Name:</label>
                       <input type="text" name="firstName" className="form-control" onChange={this.handleChange}/>
                       <button className="btn btn-primary"
                       onClick={this.handleClick}
                       >Save</button>
                   </div>
               </form>
           </div>
       );
   }
}

export default BadgeForm;