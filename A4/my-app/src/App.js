/*********************************************************************************** 
 *  WEB422 – Assignment 4 
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy. 
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students. 
 * 
 *  Name: __Rohil Khakhar____________________ Student ID: __109270173____________ Date: ____21-10-2019____________ 
 * 
 * 
 * ********************************************************************************/  


import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Overview from './components/Overview';
import Projects from './components/Projects';
import Teams from './components/Teams';
import Employees from './components/Employees';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <Switch>
       <Route exact path = '/' render={() => (
         <Overview />
       )}/>
       <Route exact path = '/projects' render={() => (
         <Projects />
       )}/>
       <Route exact path = '/teams' render={() => (
         <Teams />
       )}/>
       <Route exact path = '/employees' render={() => (
         <Employees />
       )}/>
       <Route render={() => (
         <NotFound />
       )}/>
      </Switch>
    );
  }
}

export default App;