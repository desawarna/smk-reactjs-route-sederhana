import React, { Component } from 'react';
import './App.css';
import Home from './Container/Home.jsx';
import Contact from './Container/Contact.jsx';
import Galeri from './Container/Galeri.jsx';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Galeri" component={Galeri} />
        </Switch>
      </div>
    );
  }
}

export default App;
