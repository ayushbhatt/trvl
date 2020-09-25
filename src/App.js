import React from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' excat ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
