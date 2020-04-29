import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import hubStore from '../../stores/hubStore';

import VideoLounge from './VideoLounge';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Room() {
  const { masterPeerId } = useParams();
  const [peerId, setPeerId] = useState(null);
  if (masterPeerId) {
    hubStore.masterPeerId = masterPeerId;
  }

  useEffect(() => {
    hubStore.addChangeListener(() => {
      if (hubStore.hostPeerId !== peerId) {
        setPeerId(hubStore.hostPeerId);
      }
    });
  });

  return (
    <>
      {masterPeerId || (
        <Typography variant="h6" style={{ padding: 12 }}>
          {peerId ? (
            'connect at hompage/follow/' + peerId
          ) : (
            <CircularProgress />
          )}
        </Typography>
      )}

      <VideoLounge />
    </>
  );
}
