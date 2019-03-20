import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Contact extends Component {
  constructor () {
    super();
    this.state = {
      showContactInfo: true
    };
    
    //  IF I USE A METHOD WITHOUT AN ARROW FUNCTION I NEED TO BIND IT IN THIS WAY
    // this.onShowClick = this.onShowClick.bind(this);
  }
  
  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }
  
  render() {
      const { contact } = this.props
      const { showContactInfo } = this.state
      
      return (
        <div className="card card-body mb-3">
          <h4>{contact.name} <i onClick={this.onShowClick} className="fas fa-sort-down"></i></h4>
            
            {showContactInfo ? (<ul className="list-group">
              <li className="list-group-item">
                {contact.email}
              </li>
              <li className="list-group-item">
                {contact.phone}
              </li>
            </ul>) : null}
            
        </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  
}
