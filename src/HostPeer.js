import Peer from 'peerjs';
import {
  hostPeerIdGenerated,
  connectionOpened,
  dataRecieved,
  streamRecieved,
} from './actions/hubActions';

export default class HostPeer {
  constructor(master = false) {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 320, height: 180, facingMode: 'user' },
        audio: false,
      })
      .then((stream) => {
        window.localStream = stream;
      })
      .then(() => {
        this.peer = new Peer({
          host: 'peerjs-server.herokuapp.com',
          secure: true,
          port: 443,
        });
        this.peer.on('open', (id) => {
          hostPeerIdGenerated(id);
        });

        this.peer.on('connection', (connection) => {
          console.info('connection request', connection);

          connection.on('open', () => {
            console.info('connection open', connection);

            connectionOpened(connection);
            connection.on('data', function (data) {
              console.log('Received', data);
              dataRecieved(data);
            });
          });
        });

        this.peer.on('call', function (call) {
          console.info('call incoming', call);

          call.answer(window.localStream);
          console.info('call answered', call, window.localStream);

          call.on('stream', (stream) => {
            streamRecieved(stream);
          });
        });
      });
  }

  connect(id) {
    console.info('connecting to', id);
    const connection = this.peer.connect(id);
    connection.on('open', () => {
      console.info('connection open', connection);
      connectionOpened(connection);
      connection.on('data', function (data) {
        console.log('Received', data);
        dataRecieved(data);
      });

      const call = this.peer.call(id, window.localStream);
      call.on('stream', (stream) => {
        console.info('streamyyy');
        streamRecieved(stream);
      });
    });
  }
}
