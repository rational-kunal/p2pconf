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
    <Card variant="outlined">
      <CardContent style={{ padding: 4 }}>
        <video width="100%" height="auto" ref={videoRef} autoPlay></video>
      </CardContent>
      <CardActions disableSpacing style={{ paddingTop: 0 }}>
        <IconButton aria-label="play" onClick={() => setIsPause((isP) => !isP)}>
          {isPause ? <PlayArrowIcon /> : <PauseIcon />}
        </IconButton>
        <IconButton aria-label="mute" onClick={() => setIsMute((isM) => !isM)}>
          {isMute ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
