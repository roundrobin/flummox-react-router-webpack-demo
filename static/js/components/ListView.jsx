//==============================================================================
// External dependencies
//==============================================================================
import React from 'react';
import { RouteHandler, Link } from 'react-router';
import logger from 'bragi-browser';
import {FluxComponent} from 'flummox/component'
import FluxMixin from 'flummox/mixin';

//==============================================================================
// Module definition
//==============================================================================
let ListView = React.createClass({
  mixins: [FluxMixin({
        rooms: store => ({
            rooms: store.getRooms()
        })
  })],
  componentDidMount(){
    logger.log("ListView:componentDidMount", "props", this.props);

  },
  _clickButton: function(){
    logger.log("ListView:_clickButton", "called");    

    this.props.flux.getActions('rooms').addRandomRoom({
      title: "room-"+Math.floor(Math.random()*1000)
    });  
  },
  render() {

    logger.log("ListView:render", "state", this.state);

    var roomsList = this.state.rooms.map(function(room, i){
      return <div className={"list-item"} key={i}>{room.title}</div>
    });

    return (<div className="list-view">
        <h1>List view</h1>  
        <button className={"btn"} onClick={this._clickButton}>Add random room</button>
        <br/>
        <br/>
        <div className={"list-wrapper"}>
          {roomsList}
        </div>
      </div>);
    }
});


export default ListView;
