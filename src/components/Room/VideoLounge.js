import React, { useState, useEffect } from 'react';

import hubStore from '../../stores/hubStore';

import Video from '../Video';

import { Papered } from '../muiUtil';
import Grid from '@material-ui/core/Grid';

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
    <Papered>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4} md={4}>
          <Video stream={window.localStream} muted />
        </Grid>
        {streams.map((stream) => (
          <Grid item xs={6} sm={4} md={4}>
            <Video stream={stream} />
          </Grid>
        ))}
      </Grid>
    </Papered>
  );
}
