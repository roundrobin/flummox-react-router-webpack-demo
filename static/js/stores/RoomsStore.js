//==============================================================================
// External dependencies
//==============================================================================
import { Store } from 'flummox';
import Immutable from 'immutable';
import logger from 'bragi-browser';
//==============================================================================
// Module definition
//==============================================================================



export default class RoomsStore extends Store {

  constructor(flux) {
    super();

    let roomsActionIds = flux.getActionIds('rooms');

    this.register(roomsActionIds.addRandomRoom, this.handleNewTodo);
    
    this.state = {
      rooms: []
    };
  }

  getRoomsByAuthor(roomId, author) {
      return this.state.rooms[roomId];
  }  

  handleNewTodo(roomData) {
      logger.log("RoomsStore:handleNewTodo", "called...");
      
      this.state.rooms.push(roomData);

      this.setState({
        rooms: this.state.rooms
      });
  }  

  getRooms() {
      return this.state.rooms;
  }  

 

}
