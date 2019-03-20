import React from 'react';
import Contact from "./Contact";

class Contacts extends React.Component {
    constructor () {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "Paolo Lucano",
                    email: "pluco@gmail.com",
                    phone: "555-555-5555"
                    
                },
                {
                    id: 2,
                    name: "Jennifer Lucano",
                    email: "jennifer@gmail.com",
                    phone: "777-777-7777"
                    
                },
                {
                    id: 3,
                    name: "Laura Lucano",
                    email: "laura@gmail.com",
                    phone: "888-888-8888"
                    
                },
                
                
                ]
        }
    }
    render() {
        const { contacts } = this.state;
        return(
            <React.Fragment>
                { contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </React.Fragment>
            
            );
    }
}
export default Contacts;