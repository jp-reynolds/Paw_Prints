import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Park from '../components/park/Park';
import Hike from '../components/hike/Hike';
import Camp from '../components/camp/Camp';
import Store from '../components/store/Store';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/park' component={ Park }/>
    <Route exact path='/hike' component={ Hike }/>
    <Route exact path='/camp' component={ Camp }/>
    <Route exact path='/store' component={ Store }/>
  </Switch>
)