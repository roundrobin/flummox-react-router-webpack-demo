//==============================================================================
// External dependencies
//==============================================================================
import React from 'react/addons';
import { RouteHandler, Link } from 'react-router';
import logger from 'bragi-browser';
import {FluxComponent} from 'flummox/component'
import FluxMixin from 'flummox/mixin';

//==============================================================================
// Configs
//==============================================================================
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
//==============================================================================
// Module definition
//==============================================================================
let ListView = React.createClass({
  mixins: [FluxMixin({
        rooms: store => ({
            rooms: store.getRooms(),
            activeRooms: store.getActiveRooms()
        })
  })],
  componentDidMount(){
    logger.log("ListView:componentDidMount", "props", this.props);

  },
  _clickButton: function(){
    logger.log("ListView:_clickButton", "called");    

    var id = Math.floor(Math.random()*1000);
    this.props.flux.getActions('rooms').addRandomRoom({
      title: "room-"+id,
      id: id
    });  

  },
  _openRoom: function(room){
    logger.log("ListView:render", "called...", room); 
    this.props.flux.getActions('rooms').openRoom(room);  
      
  },
  render() {
    var self = this;
    logger.log("ListView:render", "state", this.state);

    var roomsList = Object.keys(this.state.rooms).map(function(roomId, i){
      var room = self.state.rooms[roomId];
      return <div className={"room-list__item"} 
                  key={i} 
                  title="open chat room"
                  onClick={self._openRoom.bind(null, room)}
                  >
                  {room.title}
              </div>
    });

    var activeRooms = Object.keys(this.state.activeRooms).map(function(roomId, i){
        logger.log("ListView:render:activeRooms:each", "Called...", roomId);
        var room = self.state.activeRooms[roomId];
        return <div className={"active-rooms__item"} 
                  key={i} 
                  onClick={self._openRoom.bind(null, room)}
                  >
                  {room.title}
              </div>
    });

    return (<div className="list-view">
        
        <div className={"room-list"}>
          <h1>Chat app</h1>  
          <button className={"btn"} onClick={this._clickButton}>Add random chat room</button>
          <br/>
          <br/>
          <div className={"room-list-wrapper"}>          
            <ReactCSSTransitionGroup transitionName="room">
              {roomsList}
            </ReactCSSTransitionGroup>
          </div>
        </div>

        <div className={"active-rooms"}>
          {activeRooms}
        </div>




      </div>);
    }
});


export default ListView;
