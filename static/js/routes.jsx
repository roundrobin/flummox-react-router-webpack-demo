//==============================================================================
// External dependencies
//==============================================================================
import React from 'react';
import { Route, DefaultRoute,  NotFoundRoute} from 'react-router';
import FluxComponent from 'flummox/component'
//==============================================================================
// Internal dependencies
//==============================================================================
import AppHandler from './components/AppHandler.jsx';
import ListView from './components/ListView.jsx';
import HomeView from './components/Home.jsx';
import NotFoundView from './components/NotFound.jsx';

//==============================================================================
// Module definition
//==============================================================================
let Routes = (
    <Route name="app" path="/" handler={AppHandler}>
  	<Route name="home" path="/" handler={HomeView} />
    <Route name="listViewRooms" path="/list/popular" handler={ListView} />
    <NotFoundRoute handler={NotFoundView}/>
  </Route>
);

export default Routes;
