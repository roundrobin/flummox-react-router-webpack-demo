//==============================================================================
// External dependencies
//==============================================================================
import React from 'react';
import { RouteHandler, Link } from 'react-router';
import logger from 'bragi-browser';

//==============================================================================
// Config
//==============================================================================
//==============================================================================
// Module definition
//==============================================================================
let AppHandler = React.createClass({

  componentDidMount(){
    logger.log("AppHandler:componentDidMount", "called", this.props);
  },
  render() {
    return (  
        <div>
          <header>
            <Link to="home" className="link">Home</Link>
            <Link to="listViewRooms" params={{type: "poplular"}} className="link">List</Link>
          </header>
          <div className="page">
            <RouteHandler {...this.props}/>
          </div>
        </div>
    );
  },

});

export default AppHandler;
