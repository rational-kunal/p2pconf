import dispatcher from '../appDispatcher';
import actionTypes from './types';

export function hostPeerIdGenerated(id) {
  dispatcher.dispatch({
    actionType: actionTypes.HOST_OPENED,
    hostPeerId: id,
  });
}

export function connectionOpened(connection) {
  dispatcher.dispatch({
    actionType: actionTypes.CONNECTION_OPENED,
    connection: connection,
  });
}

export function dataRecieved(data) {
  dispatcher.dispatch({
    actionType: actionTypes.DATA_RECEIVED,
    data,
  });
}

export function streamRecieved(stream) {
  dispatcher.dispatch({
    actionType: actionTypes.STREAM_RECEIVED,
    stream,
  });
}
