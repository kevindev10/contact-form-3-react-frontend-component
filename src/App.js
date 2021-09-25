import React from 'react';
import './App.css';
import 'tachyons';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <Router>
        <Navbar/>
          <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route  path='/contact'>
                <Contact/>
              </Route>

         </Switch>
    </Router>
    
   
  );
}

export default App;
