import React, { useState, useEffect } from 'react';

import hubStore from '../../stores/hubStore';

import Video from '../Video';

export default function VideoLounge() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    hubStore.addChangeListener(() => {
      if (streams !== hubStore.streams) {
        setStreams([...hubStore.streams]);
      }
    });
  });

  return (
    <>
      <Video stream={window.localStream} />
      {streams.map((stream) => (
        <Video stream={stream} />
      ))}
    </>
  );
}
