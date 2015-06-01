//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
import { Flummox } from 'flummox';
//------------------------------------------------------------------------------
// Internal dependencies
//------------------------------------------------------------------------------
import RoomsActions from './actions/RoomsActions';
import RoomsStore from './stores/RoomsStore';

//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('rooms', RoomsActions);
    this.createStore('rooms', RoomsStore, this);

  }
}