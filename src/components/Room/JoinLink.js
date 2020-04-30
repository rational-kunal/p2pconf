import React, { useState, useEffect } from 'react';

import hubStore from '../../stores/hubStore';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Room() {
  const [peerId, setPeerId] = useState(null);

  useEffect(() => {
    hubStore.addChangeListener(() => {
      if (hubStore.hostPeerId !== peerId) {
        setPeerId(hubStore.hostPeerId);
      }
    });
  }, []);

  return (
    <Typography variant="subtitle1" style={{ padding: 12 }}>
      {peerId ? (
        <span>
          connect at{' '}
          <b>
            https://p2p-conf.netlify.app/follow/
            {peerId}
          </b>
        </span>
      ) : (
        <CircularProgress />
      )}
    </Typography>
  );
}
