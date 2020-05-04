import { EventEmitter } from 'events';

import dispatcher from '../appDispatcher';
import actionTypes from '../actions/types';
import HostPeer from '../HostPeer';

const EVENT = 'change';
const _hostPeer = new HostPeer();
let _hostPeerId = null;
let _hostPeerName = '';

let _masterPeerId = null;

let _connections = [];
let _streams = [];

class HubStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(EVENT, callback);
  }

  removeChangeListner(callback) {
    this.removeListener(EVENT, callback);
  }

  emitChange() {
    this.emit(EVENT);
  }

  get hostPeerId() {
    return _hostPeerId;
  }

  get hostPeerName() {
    return _hostPeerName;
  }

  get masterPeerId() {
    return _masterPeerId;
  }

  set masterPeerId(id) {
    console.info('master id', id);
    _masterPeerId = id;
  }

  get streams() {
    return _streams;
  }
}

const hubStore = new HubStore();

dispatcher.register((action) => {
  console.log('action', action);
  switch (action.actionType) {
    case actionTypes.HOST_OPENED:
      console.info('host id', action.hostPeerId);
      _hostPeerId = action.hostPeerId;
      if (_masterPeerId) _hostPeer.connect(_masterPeerId);
      hubStore.emitChange();
      break;

    case actionTypes.CONNECTION_OPENED:
      if (_masterPeerId == null) {
        _connections.forEach((connection) => {
          console.log('conn', connection);
          action.connection.send({
            type: 'CONNECT_TO',
            peerId: connection.peer,
          });
        });
      }
      _connections.push(action.connection);
      break;

    case actionTypes.DATA_RECEIVED:
      console.info('data recieved', action.data);
      switch (action.data.type) {
        case 'CONNECT_TO':
          _hostPeer.connect(action.data.peerId);
          break;

        default:
          break;
      }

      break;

    case actionTypes.STREAM_RECEIVED:
      console.info('stream recieved', action.stream);
      _streams.push(action.stream);

      hubStore.emitChange();

      break;

    default:
      break;
  }
});

export default hubStore;
