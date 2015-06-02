//==============================================================================
// External dependencies
//==============================================================================
import {
    Store
}
from 'flummox';
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
        this.register(roomsActionIds.openRoom, this.handleNewActiveRoom);
        this.state = {
            rooms: {},
            activeRooms: {}
        };
    }
    getRoomsByAuthor(roomId, author) {
        return this.state.rooms[roomId];
    }
    handleNewActiveRoom(room) {
        logger.log("RoomsStore:handleNewActiveRoom", "called...", room);
        this.state.activeRooms[room.id] = room;
        this.setState({
            activeRooms: this.state.activeRooms
        });
    }
    handleNewTodo(roomData) {
        logger.log("RoomsStore:handleNewTodo", "called...");
        this.state.rooms[roomData.id] = roomData;
        this.setState({
            rooms: this.state.rooms
        });
    }
    getRooms() {
        return this.state.rooms;
    }
    getActiveRoomById(roomId) {
        logger.log("RoomsStore:getActiveRoomById", "called...", roomId);
        return this.state.activeRooms[roomId]
    }
    getActiveRooms() {
        return this.state.activeRooms;
    }
}
