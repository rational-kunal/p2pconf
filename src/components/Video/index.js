import React, { useState, useEffect } from 'react';

export default function Video({ stream }) {
  const [videoRef] = useState(React.createRef());

  useEffect(() => {
    if (stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, videoRef]);

  return (
    <div style={{ marginBottom: 12 }}>
      <video width="100px" height="auto" ref={videoRef} autoPlay></video>
    </div>
  );
}
