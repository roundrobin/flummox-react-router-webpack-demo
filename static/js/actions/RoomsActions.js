//==============================================================================
// External dependencies
//==============================================================================
import logger from 'bragi-browser';
import { Actions } from 'flummox';

//==============================================================================
// Module definition
//==============================================================================
export default class RoomsActions extends Actions {

    addRandomRoom(roomData) {
    	logger.log("RoomActions:addRandomRoom", "called...");
	    return roomData;
  	}


}
