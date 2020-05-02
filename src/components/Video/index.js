import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

export default function Video({ stream, should }) {
  const [videoRef] = useState(React.createRef());
  const [isMute, setIsMute] = useState(false);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    if (stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, videoRef]);

  useEffect(() => {
    videoRef.current.muted = isMute;
  }, [isMute]);

  useEffect(() => {
    isPause ? videoRef.current.pause() : videoRef.current.play();
  }, [isPause]);

  return (
    <Card
      variant="outlined"
      style={{
        width: '100%',
        height: '300px',
        position: 'relative',
        backgroundColor: '#333',
      }}
    >
      <video
        style={{
          position: 'absolute',
          height: '300px',
          left: 0,
          right: 0,
          margin: 'auto',
          backgroundColor: '#333',
        }}
        ref={videoRef}
        autoPlay
      ></video>
      <CardActions disableSpacing>
        <IconButton
          aria-label="play"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
          onClick={() => setIsPause((isP) => !isP)}
        >
          {isPause ? <PlayArrowIcon /> : <PauseIcon />}
        </IconButton>
        <IconButton
          aria-label="mute"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', marginLeft: 4 }}
          onClick={() => setIsMute((isM) => !isM)}
        >
          {isMute ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
