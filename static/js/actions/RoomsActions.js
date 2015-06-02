//==============================================================================
// External dependencies
//==============================================================================
import logger from 'bragi-browser';
import { Actions } from 'flummox';

//==============================================================================
// Module definition
//==============================================================================
export default class RoomsActions extends Actions {

    addRandomRoom(room) {
    	logger.log("RoomActions:addRandomRoom", "called...", room);
	    return room;
  	}

  	openRoom(room){
  		logger.log("RoomActions:openRoom", "called...", room);
  		return room;	
  	}


}
