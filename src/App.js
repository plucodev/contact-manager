import React, { Component } from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <Contact name="Paolo Lucano" email="pluco@gmail.com" phone="555-555-5555"/>
        <Contact name="Jennifer Lucano" email="jennifer@gmail.com" phone="667-555-5555"/>
      </div>
    );
  }
}

export default App;
